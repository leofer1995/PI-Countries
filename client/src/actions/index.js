//import axios from 'axios';

export const getCountries = ()=>{
    return async function (dispatch){
        const res = await fetch('http://localhost:3001/countries');
        const json = await res.json()    
        return dispatch({type: "GET_COUNTRIES",payload: json})
    }
}

export const pagePrevious = ()=>{
    return {type:"PREVIOUS_PAGE"}
}

export const pageFollowing = ()=>{
    return {type:"FOLLOWING_PAGE"}
}