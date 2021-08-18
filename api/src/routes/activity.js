const express = require('express');
const { ActCount, GetCountries } = require('../../functions');
const router = express.Router();
//const axios = require('axios')
const {Activity, Country} = require('../db');

router.post('/',async(req,res)=>{
    const data = req.body;
    const numCountries = await Country.count()
    try{
        if(!numCountries) await GetCountries()
        ActCount(data)
        res.send('Creacion correcta')
    }catch(err){
        res.json(err)
    }
})

module.exports = router;