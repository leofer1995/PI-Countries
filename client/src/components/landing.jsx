import React from 'react';
import styles from './styles/landing.module.css';
import { Link } from 'react-router-dom'
//import img  from '../styles/earth.png';
const Landing = ()=>{

    return (
        // <div className={styles.contenedor}>
        //     <div className={styles.contimg}>
        //         <img className={styles.imagen} src={img}></img>
        //     </div>
        //     <h1 className={styles.titulo}></h1>
        //     <div className={styles.boton}>!Visitar!</div>
        // </div>
        <section className={styles.full}>
            <div className={styles.fullinner}>
                <div className={styles.content}>
                    <h4>Siapp Countries</h4>
                    <Link to='/home' style={{ textDecoration: 'none' }}>
                        <div className={styles.boton} >¡Vamos!</div>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Landing;