import React from 'react';
import styles from './styles/flag.module.css'
import {Link} from 'react-router-dom'
//import { connect } from 'react-redux'; 

const Flag = ({flag, name, continent, code}) => {
    return (
        // <div className={styles.contenedorBandera}>
        //     <img className={styles.img} src={flag}></img>
        //     <h3 className={styles.name}>{name.toUpperCase()}</h3> 
        //     <h4 className={styles.continent}>{continent}</h4>  
        // </div>
        <Link to={`/country/${code}`}>
            <div className={styles.contenedorBandera}>
                <img className={styles.img} src={flag} alt='bandera'></img>
                <div className={styles.contenedorInf}>
                    <h5 className={styles.name}>{name.toUpperCase()}<br></br> {continent}</h5> 
                </div>
            </div>
        </Link>
    )
}

export default Flag;