import React, { useEffect, useState } from 'react';
import styles from './styles/country.module.css'
import axios from 'axios';

const Country = ({id})=>{
    const [country , setCountry]= useState({
        activities:[],
        area:'',
        capital:'',
        code:'',
        continent:'',
        flag:'',
        name:'',
        population:'',
        subregion:''
    })
    useEffect(()=>{
        async function getDetCountry(){
            const country = await axios(`http://localhost:3001/countries/${id}`)
            console.log(country)
            return country.data[0]
        }
        getDetCountry().then(country=>setCountry(country));
    },[id]);

    return (
        <div className={styles.contenedor}>
            <div className={styles.name}><h1>{country.name.toUpperCase()}</h1></div>
            <div className={styles.contDet}>
                <div className={styles.Contflag}>
                    <img className={styles.flag} src={country.flag} alt={`Bandera de ${country.name}`} />
                </div>
                <div className={styles.contInf}>
                    <h3>Code: {country.code}</h3>
                    <h3>Contienent: {country.continent}({country.subregion})</h3>
                    <h3>Capital: {country.capital}</h3>
                    <h3>Area: {country.area.replace(/\B(?=(\d{3})+(?!\d))/g, ",")} km²</h3>
                    <h3>Population: {country.population.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h3>
                </div>
            </div>
            <div className={styles.contA}>
                <div className={styles.name}><h1>Activities</h1></div>
                <div className={styles.contAct}>
                    {country.activities.map(act=>(<div className={styles[act.difficulty]}>
                        <span>Name: {act.name}</span>
                        <span>Difficulty: {act.difficulty}</span>
                        <span>Duration: {act.duration}</span>
                        <span>Season: {act.station}</span>
                    </div>))}
                </div>
            </div>
        </div>
    )
}

export default Country