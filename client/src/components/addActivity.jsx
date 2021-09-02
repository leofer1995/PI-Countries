import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getCountries, getRender } from '../actions';
import Etiquetas from './etiquetas';
import styles from './styles/addActivity.module.css'
import axios from 'axios'

const AddActivity = ({listCountries,getPaises,getRenderPaises})=>{

//    const [activity , setActivity] = useState('')
//    const [countries, setCountries] = useState([])
   const [input, setInput] = useState({
       activity:'',
       difficulty:'',
       duration:'',
       season:'all',
       countries:[]
   })
   const [error, setError] = useState({
       addActivity:true,
       dufficulty:'',
       duration:true,
       countries:true,
   })

    useEffect(()=>{
        //async function getCount(){
           // await
             getPaises();
       // }
           // getCount().then(()=>getRenderPaises())
            //getRenderPaises();
    },[ getPaises])


   const handleActivity = (e)=>{
        e.target.value?setError({...error,addActivity:false}):setError({...error,addActivity:true})
        setInput({...input,activity:e.target.value})
   }
   const handleDif = (e)=>{
        // setError({...error,difficulty:false})//seteo mi error a false
        if(e.target.value === 'easy') setError({...error,difficulty:'easy'})
        else if(e.target.value === 'medium') setError({...error,difficulty:'medium'})
        else setError({...error,difficulty:'hard'})
        setInput({...input,difficulty:e.target.value})
        console.log(error.difficulty)
   }
   const handleDuration = (e)=>{
       if(e.target.type === 'number') {
           e.target.value?setError({...error,duration:false}):setError({...error,duration:true})
           setInput({...input,duration:e.target.value +' '+e.target.form[5].value})
       }
       else setInput({...input,duration:e.target.form[4].value +' '+e.target.value})
   }
   const handleSeason = (e)=>{
        setInput({...input,season:e.target.value})
   }
   const addCountry = (e)=>{
       setError({...error,countries:false})
       if(!input.countries.includes(e.target.value)){
        //    setInput([...countries,e.target.value])
        setInput({...input,countries:[...input.countries,e.target.value]})
       }
   }
   const onClose=(count)=>{
        const paises = input.countries.filter(country => count !== country)
        paises.length || setError({...error,countries:true})
        setInput({...input,countries:[...paises]})
   }

   const submitActivity =async (e)=>{
        e.preventDefault()
        if(error.addActivity || error.difficulty==='' || error.duration || error.countries){
            alert('¡Please complete all fields!')
        }else{
            await axios.post('http://localhost:3001/activity',input);
            alert('¡Activity added successfully!')
            window.location.reload();
        }
   }

    return(
        <div className={styles.contForm}>

            <div className={styles.contTit}><h1>Add Activity</h1></div>
            <form onSubmit={(e)=>submitActivity(e)}>
                <div className={styles.contInputs}>
                    <div className={error.addActivity?styles.dangerAct:styles.contActivity}>
                        <label htmlFor="name">Activity: </label>
                        <div className={styles.inAct}>
                            <input  onChange={e=>handleActivity(e)} type="text" placeholder='Name Activity' value={input.activity}/>
                        </div>
                    </div>

                    <div className={error.difficulty ? styles[error.difficulty] : styles.contDiff}> 
                        <label htmlFor="name">Difficulty: </label>
                        <div className={styles.contNiv}>
                            <div>
                                 <input type='radio'value='easy' name='dif'  onClick={(e)=>handleDif(e)}/><label htmlFor='facil'>Easy</label>
                            </div>
                            <div>
                                <input type='radio' value='medium' name='dif' onClick={(e)=>handleDif(e)}/><label htmlFor='medio'>Medium</label>
                            </div>
                            <div>
                                 <input type='radio'value='hard' name='dif' onClick={(e)=>handleDif(e)}/><label htmlFor='dificil'>Hard</label>
                            </div>
                        </div>
                    </div>
                    <div className={error.duration ?styles.contTimeDanger:styles.contTime}>
                        <label>Duration: </label>
                        <input  type="number"  min="1" max="24" onChange={e=>handleDuration(e)}  />
                        <select name="unidad" id="unity" onChange={(e)=>handleDuration(e)}>
                            <option value="horas">Horas</option>
                            <option value="dias">Dias</option>
                            <option value="semanas">Semanas</option>
                        </select>
                    </div>
                    <div className={styles.contTime}>
                        <label>Season:</label>
                        <select name="season" onChange={e=>{handleSeason(e)}} >
                            <option value="all">All</option>
                            <option value="winter">Winter</option>
                            <option value="spring">Spring</option>
                            <option value="summer">Summer</option>
                            <option value="autumn">Atumn</option>
                        </select>
                    </div>
                    <div className={error.countries?styles.addDanger:styles.add}>
                        <div className={styles.contCount}>
                            <span>Select Countries:</span>
                            <select className={styles.selCount} onChange={addCountry} name="countries">
                                {listCountries.map(country=>
                                    <option label={country.name.toUpperCase()} key={country.code} value={country.code}/>
                                )}
                            </select>
                        </div>   
                        <div className={styles.contEtq}>
                            {input.countries.map((country,i)=><Etiquetas name={country} onClose={onClose} key={i}/>)}
                        </div>
                    </div>
                    <input type="submit" value='submit' />
                </div>
            </form>           
        </div>
    )

}

function mapStateToProps(state){
    return {
        listCountries:state.countries,
    }
}
function mapDispatchToProps(dispatch){
    return {
        getPaises: ()=> dispatch(getCountries()),  
        getRenderPaises: ()=>dispatch(getRender()),      
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(AddActivity)