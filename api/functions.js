const axios = require('axios');
const {Country, Activity} = require('./src/db.js')



const GetCountries = async()=>{
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
    //return data;
    //const submit = await Country.bulkCreate(data)
}

const ActCount = async(data)=>{//RELACIONA LA TABLA INTERMEDIA
    let sub = []
    for(let i = 0; i < data.length; i++ ){
           let [instance, created] = await Activity.findOrCreate({
           where: {name:data[i].name, id_country:data[i].id_country},
           defaults:{
               difficulty:data[i].difficulty,
               duration:data[i].duration,
               station:data[i].station,
           }
       })
       sub.push(instance)
       //console.log(sub)
   }
    const newSub = sub.map(el=> el.toJSON())
    for(let i = 0; i < newSub.length;i++ ){
        let activity = await Activity.findByPk(newSub[i].id)
        await activity.addCountry(newSub[i].id_country)
    }
}

module.exports = {
    GetCountries,
    ActCount
}