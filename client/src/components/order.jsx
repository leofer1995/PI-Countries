import React from 'react';
import { connect } from 'react-redux';
import { ordering } from '../actions';
import styles from './styles/controller.module.css'

const Order = ({ordenar})=>{

    const orderCountries = (e)=>{
        ordenar(e.target.value)
        e.target.value = 'def'
    }

    return(
        <select onChange={orderCountries} defaultValue='def' name='Order' className={styles.order}>
            <option value='def' disabled>Ordering</option>
            <option value='az' >A-Z</option>
            <option value='za'>Z-A</option>
            <option value='asd'>Ascending population</option>
            <option value='des'>Unresponsive population</option>
        </select>
    )
}
function mapDispatchToProps(dispatch){
    return {
        ordenar:(condition)=>dispatch(ordering(condition))
    }
}

export default connect(null, mapDispatchToProps)(Order);