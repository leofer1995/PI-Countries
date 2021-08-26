import React from "react";
import { connect } from 'react-redux'; 
import { getRender, pageFollowing, pagePrevious } from "../actions";
import styles from './styles/pagination.module.css'

const Pagination = (props)=>{
    const previous = ()=>{
        props.prev()
        props.getRenderPaises()  
    }

    const following = () =>{
        props.foll()
        props.getRenderPaises()   
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
       // getPaises:()=>dispatch(getCountries()),
        getRenderPaises: ()=>dispatch(getRender()),   
    }
}

export default connect(null,mapDispatchToProps)(Pagination)