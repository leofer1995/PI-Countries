import React from 'react';
import Filter from './filter';
import Order from './order';
import Search from './search';
import styles from './styles/controller.module.css'

const Controller = () =>{

    return (
        <div className={styles.contenedor}>
            <Search />
            <Filter />
            <Order />
        </div>
    )

}


export default Controller