const express = require('express');
const { ActCount, GetCountries } = require('../../functions');
const router = express.Router();
//const axios = require('axios')
const {Activity, Country,countryActivity} = require('../db');

router.get('/:id',async(req,res)=>{
    try{
        const {id} = req.params
        const resdb = await Activity.findAll({
            where:{id:id},
            attributes:['name'],
            include:[{
                model:Country, 
            }]
        }
        ); 
        const [hola] = resdb 
        res.json(hola.countries)
    }catch(err){
        res.json(err)
    }
})
router.get('/',async(req,res)=>{
    try{
        const resdb = await Activity.findAll({
            attributes:['name','id'],
        }); 
        res.json(resdb)
    }catch(err){
        res.json(err)
    }
})
router.post('/',async(req,res)=>{
    try{
        const data = req.body;
        const numCountries = await Country.count()
        if(!numCountries) await GetCountries()
        ActCount(data)
        res.send('Creacion correcta')
    }catch(err){
        res.json(err)
    }
})



module.exports = router;