import React, { useEffect } from 'react';
import { connect } from 'react-redux'; 
import { getCountries } from '../actions';
import Flag from './flag';
import Pagination from './pagination';
import styles from './styles/flags.module.css'

const Flags = ({paises, getPaises})=>{
    console.log(paises)
    useEffect(()=>{
        getPaises()
    },[])
    return (
    <div className={styles.contenedorHome}>
        <div className={styles.contenedorBanderas}>
            {paises.map(
                (pais, i)=>(
                    <Flag 
                        flag={pais.flag}
                        name={pais.name}
                        continent={pais.continent}
                    />
            ))}
        </div>
        <Pagination />
    </div>
    )

};

function mapDispatchToProps(dispatch){
    return {
        getPaises: ()=> dispatch(getCountries()),        
    }
};

function mapStateToProps(state){
    return{
        paises: state.countries, 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Flags);