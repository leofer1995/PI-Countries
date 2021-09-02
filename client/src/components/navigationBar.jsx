import React from 'react';
import styles from './styles/navigationBar.module.css'
import { Link } from 'react-router-dom';

const NavigationBar = ()=>{
    return(
        <div className={styles.contenedor}>
            <Link to='/home'>
                <h2 className={styles.home}>Home</h2>
            </Link>
            <Link to='/AddActivity'>
                <h3 className={styles.activity}>Add Activity</h3>
            </Link>
        </div>
    )
}

export default NavigationBar