import React from 'react';
import { connect } from 'react-redux';
import { filters } from '../actions';
import styles from './styles/controller.module.css'

const Filter = ({filter, act})=>{
    let arrConti=['Europe','Africa','Polar','Americas','Asia','Oceania','All'];

    const filCont = (e)=>{
        filter(e.target.value)
        e.target.value = 'fil'
    }
    return(
        <select onChange={filCont} defaultValue='fil' name='filter' placeholder='Filter' className={styles.filter}>
            <option value='fil' disabled>Filters</option>
            <option value='continente' disabled>Contienente</option>
                {arrConti.map((cont,i)=><option value={cont} key={i}>&nbsp;&nbsp;&nbsp;{cont}</option>)}
            <option value='actividad'disabled>Actitvity</option>
                {act.map((act)=><option value={act.id} key={act.id}>&nbsp;&nbsp;&nbsp;{act.name.toUpperCase()}</option>)} 
        </select>
    )
}

function mapDispatchToProps(dispatch){
    return {
        filter: (condicion)=> dispatch(filters(condicion)),        
    }
};

function mapStateToProps(state){
    return {
        act:state.activities,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);