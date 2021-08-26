import React, { useState } from 'react';
import styles from './styles/controller.module.css'
import { connect } from 'react-redux';
import { searchCountry } from '../actions';

const Search = (props)=>{
    const [country, setCountry] = useState('')
    const changeInput=(e)=>{
        setCountry(e.target.value)
    }
    return (
    <div>
        <input value={country} placeholder='Search Country' className={styles.search} onChange={changeInput}></input>
        <button className={styles.btn} onClick={()=>props.pais(country)}>Search</button>
    </div>
    )
}
function mapDispatchToProps(dispatch){
    return {
      pais:country=>dispatch(searchCountry(country))
    }
}
export default connect(null, mapDispatchToProps)(Search);