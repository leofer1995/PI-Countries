import React, { useState } from 'react';
import { connect } from 'react-redux';
import Etiquetas from './etiquetas';
import styles from './styles/addActivity.module.css'


const AddActivity = ({listCountries})=>{
   const [countries, setCountries] = useState([])

   const addCountry = (e)=>{
       if(!countries.includes(e.target.value)){
           setCountries([...countries,e.target.value])
       }
   }

   const onClose=(count)=>{
        const paises = countries.filter(country => count !== country)
        setCountries(paises)
   }

    return(
        <div>
            <label htmlFor="name">Activity </label><input type="text" placeholder='Name Activity' id='name'/>

            <div> 
                <input type='radio' name='dificulty' id='facil' value='easy' /><label htmlFor='facil'>Easy</label>
                <input type='radio' name='dificulty' id='medio' value='medium' /><label htmlFor='medio'>Medium</label>
                <input type='radio' name='dificulty' id='dificil' value='hard' /><label htmlFor='dificil'>Hard</label>
            </div>

            <div>
                <label htmlFor="">duration</label>
                <input  type="number" placeholder="Time"  min="1" max="24" />
                <select name="unidad" id="unity">
                    <option value="horas">Horas</option>
                    <option value="dias">Dias</option>
                    <option value="semanas">Semanas</option>
                </select>
            </div>

            <select onChange={addCountry} name="countries">
                {listCountries.map(country=>
                    <option key={country.code}value={country.name}>{country.name.toUpperCase()}</option>
                )}
            </select>
            
            <div className={styles.contEtq}>
                {countries.map((country,i)=><Etiquetas name={country} onClose={onClose} key={i}/>)}
            </div>

            <button onClick={()=>{console.log(countries)}}>Add Activity</button>
          

        </div>
    )

}

function mapStateToProps(state){
    return {
        listCountries:state.countries,
    }
}

export default connect(mapStateToProps)(AddActivity)