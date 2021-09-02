const axios = require('axios');
const {Country, Activity} = require('./src/db.js')

const GetCountries = async()=>{
    try{
        const response = await axios('https://restcountries.eu/rest/v2/all');
        const data = response.data.map(count =>({
            code:count.alpha3Code,
            name:count.name,
            flag:count.flag,
            continent:count.region,
            capital:count.capital,
            subregion:count.subregion,
            area:count.area,
            population:count.population,
        }))
        await Country.bulkCreate(data)  
    }catch(err){
        console.log(err)
    }
}

const ActCount = async(data)=>{//RELACIONA LA TABLA INTERMEDIA
    try{
            let [instance, created] = await Activity.findOrCreate({
                 where: {name:data.activity},
                 defaults:{
                     difficulty:data.difficulty,
                     duration:data.duration,
                     station:data.season,
                 }
             })
             if(created){
                let activity = await Activity.findByPk(instance.toJSON().id)
                await activity.addCountries(data.countries)
             }
    }catch(err){
        console.log(err)
    }
}

module.exports = {
    GetCountries,
    ActCount
}