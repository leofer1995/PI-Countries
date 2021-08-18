const express = require('express');
const router = express.Router();
const axios = require('axios')
const {Country} = require('../db');
const { GetCountries } = require('../../functions');

//console.log(Country)
router.get('/',async(req,res)=>{
    try{
        const numCountries = await Country.count()
        if(!numCountries){
            await GetCountries()    
        }
        const resServer = await Country.findAll(); 
        res.json(resServer) 
    }
    catch(err){
        res.send(err)
    }
});

router.get('/:id',async(req, res)=>{
    const { id } = req.params;
    console.log(id)
    const response = await Country.findAll({
        where:{
            code:id
        }
    })
    res.json(response)

})


module.exports = router;