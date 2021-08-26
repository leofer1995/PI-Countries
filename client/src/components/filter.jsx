import React from 'react';
import styles from './styles/controller.module.css'

const Filter = ()=>{
    return(
        <select defaultValue='fil' name='filter' placeholder='Filter' className={styles.filter}>
            <option value='fil' disabled>Filters</option>
            <option value='continente'>Contienente</option>
            <option value='actividad'>Actitvity</option>
        </select>
    )
}

export default Filter