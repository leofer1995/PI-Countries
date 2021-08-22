import React from 'react';
import styles from './styles/flag.module.css'
//import { connect } from 'react-redux'; 

const Flag = ({flag, name, continent}) => {
    return (
        // <div className={styles.contenedorBandera}>
        //     <img className={styles.img} src={flag}></img>
        //     <h3 className={styles.name}>{name.toUpperCase()}</h3> 
        //     <h4 className={styles.continent}>{continent}</h4>  
        // </div>
        <div className={styles.contenedorBandera}>
            <img className={styles.img} src={flag}></img>
            <div className={styles.contenedorInf}>
                <h5 className={styles.name}>{name.toUpperCase()}<br></br> {continent}</h5> 
            </div>
        </div>
    )
}

export default Flag;