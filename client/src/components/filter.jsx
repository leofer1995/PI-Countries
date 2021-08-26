import React from 'react';
import { connect } from 'react-redux';
import { filters } from '../actions';
import styles from './styles/controller.module.css'

const Filter = ({filter})=>{

    let arrConti=['Europe','Africa','Polar','Americas','Asia','Oceania'];

    const filCont = (e)=>{
        filter(e.target.value)
    }
    return(
        <select onChange={filCont} defaultValue='fil' name='filter' placeholder='Filter' className={styles.filter}>
            <option value='fil' disabled>Filters</option>
            <option value='continente' disabled>Contienente</option>
                {arrConti.map((cont,i)=><option value={cont} key={i}>&nbsp;&nbsp;&nbsp;{cont}</option>)}
            <option value='actividad'disabled>Actitvity</option>
                {/* {arr.map(act=><option>&nbsp;&nbsp;&nbsp;{act}</option>)} */}
                {/* <option value='actividad'>&nbsp;&nbsp;&nbsp;sky</option>
                <option value='actividad'>&nbsp;&nbsp;&nbsp;Volar</option>
                <option value='actividad'>&nbsp;&nbsp;&nbsp;Paracaidas</option>
                <option value='actividad'>&nbsp;&nbsp;&nbsp;rafting</option> */}
        </select>
    )
}

function mapDispatchToProps(dispatch){
    return {
        filter: (condicion)=> dispatch(filters(condicion)),        
    }
};

export default connect(null, mapDispatchToProps)(Filter);