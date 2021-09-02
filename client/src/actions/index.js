import axios from 'axios';


const arrConti=['Europe','Africa','Polar','Americas','Asia','Oceania','All'];

export const getCountries = ()=>{
    return async function (dispatch){
        const res = await fetch('http://localhost:3001/countries');
        const json = await res.json()    
        const act = await axios('http://localhost:3001/activity/')
        return dispatch({type: "GET_COUNTRIES",payload: {countries:json,activities:act.data}})
    }
}

export const getRender = () =>{
    return {type:"GET_RENDER"}
}

export const pagePrevious = (cond)=>{
    console.log(cond)
    return {type:"PREVIOUS_PAGE",payload:cond}
}

export const pageFollowing = (cond)=>{
    return {type:"FOLLOWING_PAGE",payload:cond}
}

export const searchCountry = (country)=>{
    return {type:"SEARCH_COUNTRY", payload:country}
}

export const ordering = (condition) => {
    return {type:"ORDER_COUNTRIES", payload:condition}
}

export const filters = (condition) =>{
    if(arrConti.includes(condition)){
        return {type:"FILTER_COUNTRIES", payload:condition}
    }else{
        return async function(dispatch){
            const res = await axios(`http://localhost:3001/activity/${condition}`)
            console.log(res.data,'dhfkdjshfkadjs')
            return dispatch({type:"FILTER_COUNTRIES", payload:res.data})
        }
    }
} 

