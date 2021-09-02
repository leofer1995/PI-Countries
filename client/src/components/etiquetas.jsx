import React from 'react';
import styles from './styles/etiquetas.module.css'
// import {onClose} from './addActivity'
const Etiquetas = ({name, onClose})=>{

    // const onClose=(e)=>{
    //     console.log(e)
    // }
    return (
         <div className={styles.etq}>
            <div className={styles.country}>{name.toUpperCase()}</div>
            <div className={styles.x} onClick={()=>onClose(name)}></div>
        </div>
    )
}

export default Etiquetas