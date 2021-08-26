import React from 'react';
import styles from './styles/navigationBar.module.css'
import { Link } from 'react-router-dom';

const NavigationBar = ()=>{
    return(
        <div className={styles.contenedor}>
            <Link to='/home'>
                <span className={styles.home}>Home</span>
            </Link>
            <Link to='/AddActivity'>
                <span className={styles.activity}>Add Activity</span>
            </Link>
        </div>
    )
}

export default NavigationBar