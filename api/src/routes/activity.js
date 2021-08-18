const express = require('express');
const { ActCount, GetCountries } = require('../../functions');
const router = express.Router();
//const axios = require('axios')
const {Activity, Country} = require('../db');


console.log(Activity)

router.post('/',async(req,res)=>{
    const data = req.body;
    const numCountries = await Country.count()
    // let sub = []
    //  for(let i = 0; i < data.length; i++ ){
    //      console.log(data[i])
    //         let [instance, created] = await Activity.findOrCreate({
    //         where: {name:data[i].name, id_country:data[i].id_country},
    //         defaults:{
    //             difficulty:data[i].difficulty,
    //             duration:data[i].duration,
    //             station:data[i].station,
    //         }
    //     })
    //     sub.push(instance)
    // }
    if(!numCountries) await GetCountries()
    ActCount(data)
    res.send('vamos')
})

module.exports = router;