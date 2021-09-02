import React from "react";
import { connect } from 'react-redux'; 
import { getRender, pageFollowing, pagePrevious } from "../actions";
import styles from './styles/pagination.module.css'

const Pagination = (props)=>{
    const previous = (cond)=>{
        props.prev(cond)
        props.getRenderPaises()  
    }

    const following = (cond) =>{
        props.foll(cond)
        props.getRenderPaises()   
    }
    

    return (
        <div className={styles.contenedorPag}>
            {props.page!==1?<button className={styles.fleL} onClick={()=>previous()}></button>:null}
            {props.page >1 ? <button className={styles.btn} onClick={()=>previous(1)}>...</button>:null}
            {<button  className={styles.actual}>{props.page}</button>}
            {props.page < props.pages?<button className={styles.btn} onClick={()=>following()}>{props.page + 1}</button>:null}
            {props.page<props.pages-1?<button className={styles.btn}  onClick={()=>following(props.pages-1)}>...</button>:null}
            {props.page>=props.pages-1?null:<button className={styles.fleR} onClick={()=>following()}></button>}
        </div>

    )
}

function mapDispatchToProps(dispatch){
    return {
        prev:(cond)=>dispatch(pagePrevious(cond)),
        foll:(cond)=>dispatch(pageFollowing(cond)),
       // getPaises:()=>dispatch(getCountries()),
        getRenderPaises: ()=>dispatch(getRender()),   
    }
}

function mapStateToProps(state){
    return{
        pages:state.pages,
        page:state.page,
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Pagination)