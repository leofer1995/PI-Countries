//import axios from 'axios';

export const getCountries = ()=>{
    console.log('aquiiii entre a GetCountries')
    return async function (dispatch){
        const res = await fetch('http://localhost:3001/countries');
        const json = await res.json()    
        return dispatch({type: "GET_COUNTRIES",payload: json})
    }
}

export const getRender = () =>{
    return {type:"GET_RENDER"}
}

export const pagePrevious = ()=>{
    return {type:"PREVIOUS_PAGE"}
}

export const pageFollowing = ()=>{
    return {type:"FOLLOWING_PAGE"}
}

export const searchCountry = (country)=>{
    return {type:"SEARCH_COUNTRY", payload:country}
}

export const ordering = (condition) => {
    return {type:"ORDER_COUNTRIES", payload:condition}
}