import React from "react";
import { connect } from 'react-redux'; 
import { getCountries, pageFollowing, pagePrevious } from "../actions";
import styles from './styles/pagination.module.css'
const Pagination = (props)=>{
    const previous = ()=>{
        props.getPaises()
        props.prev()
    }

    const following = () =>{
        props.getPaises()
        props.foll()
    }

    return (
        <div className={styles.contenedorPag}>
            <button  className={styles.btn} onClick={previous}>Anterior</button>
            <button className={styles.btn} onClick={following}>siguiente</button>
        </div>

    )
}

function mapDispatchToProps(dispatch){
    return {
        prev:()=>dispatch(pagePrevious()),
        foll:()=>dispatch(pageFollowing()),
        getPaises:()=>dispatch(getCountries())

    }
}

export default connect(null,mapDispatchToProps)(Pagination)