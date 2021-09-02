import React, { useEffect } from 'react';
import { connect } from 'react-redux'; 
import { getCountries, getRender } from '../actions';
import Controller from './controller';
import Flag from './flag';
import styles from './styles/flags.module.css'

const Flags = ({paises, getPaises, getRenderPaises, numPaises})=>{
    useEffect(()=>{
        async function getCount(){
            await getPaises();
        }
            getCount().then(()=>getRenderPaises())
            //getRenderPaises();
    },[getRenderPaises, getPaises])
    return (
    <div className={styles.contenedorHome}>
        <Controller />
        <div className={styles.contenedorBanderas}>
            {paises.map(
                (pais)=>(
                    <Flag 
                        key = {pais.code}
                        code = {pais.code}
                        flag={pais.flag}
                        name={pais.name}
                        continent={pais.continent}
                    />
            ))}
        </div>
        {/* <Pagination /> */}
    </div>
    )

};

function mapDispatchToProps(dispatch){
    return {
        getPaises: ()=> dispatch(getCountries()),  
        getRenderPaises: ()=>dispatch(getRender()),      
    }
};

function mapStateToProps(state){
    return{
        paises: state.renderCountries, 
        numPaises :state.countries
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Flags);