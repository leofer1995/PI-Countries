const express = require('express');
const router = express.Router();
const axios = require('axios')
const {Country, countryActivity, Activity, Op} = require('../db');
const { GetCountries } = require('../../functions');


router.get('/',async(req,res)=>{
    try{
        const {name} = req.query
        const numCountries = await Country.count()
        if(!numCountries){
            await GetCountries()    
        }
        if(name){
            let nameMin = name.toLowerCase()
            const response = await Country.findAll({
                where:{
                    name:{[Op.substring]: nameMin}
                }
            })
            return res.json(response)
        }
        const resServer = await Country.findAll(); 
        res.json(resServer) 
    }
    catch(err){
        res.send(err)
    }
});



router.get('/:id',async(req, res)=>{
    try{
        const { id } = req.params;
        const idMay = id.toUpperCase()
        const numCountries = await Country.count()
            if(!numCountries){
                await GetCountries()    
            }
        const response = await Country.findAll({
            where:{code:idMay},
            include:[{
                model:Activity
            }]
        })
        if(!response.length){
            return res.send("No hay registros para " + idMay)
        }
        res.json(response)
    }catch(err){
        res.json(err)
    }



})


module.exports = router;