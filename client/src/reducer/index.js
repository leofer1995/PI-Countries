

const initialState = {
    countries: [],
    page: 1,
    renderCountries:[]
}

const rootReducer = (state = initialState, action)=>{
    if(action.type === 'GET_COUNTRIES'){// se ejecuta una vez cuando renderizo por primera vez el componente flags
        return{
            ...state,
            countries:[...action.payload],
        }
    }

    if(action.type==="GET_RENDER"){//se ejecuta la primera vez y cada vez que altualizo el estado page
        const render = state.countries.slice((state.page-1)*10,(state.page-1)*10+10)
        return {
            ...state,
            renderCountries:render
        }
    }

    if(action.type==="PREVIOUS_PAGE"){//actualiza el state page
        if(state.page === 1) return {...state,page:state.page}
        return {...state,page: state.page - 1,}
    }
    
    if(action.type==="FOLLOWING_PAGE"){//actualiza es state page
        if(state.page === 25) return {...state,page: state.page}
        return {...state,page: state.page + 1,}
    }

    if(action.type==="SEARCH_COUNTRY"){//busca y renderiza el pais
        action.payload=action.payload.toLowerCase()
        const large = action.payload.length
        console.log(large)
        const country = state.countries.filter((coun)=> coun.name.substr(0,large)===action.payload)
        return {
            ...state, 
            renderCountries:country
        }
    }

    if(action.type === "ORDER_COUNTRIES"){
        if(action.payload === 'asd'){
            const order = state.countries.sort(function(a,b){return a.population - b.population})
            const render = order.slice(0,10)
            return {...state,
            page: 1,
            countries:order,
            renderCountries:render,
            }
        }
        if(action.payload === 'des'){
            const order = state.countries.sort(function(a,b){return b.population - a.population})
            const render = order.slice(0,10)
            return {...state,
            page: 1,
            countries:order,
            renderCountries:render,
            }
        }
        if(action.payload === 'az'){
            const order = state.countries.sort(function(a,b){
                if(a.name<b.name)return -1;
                else if(a.name > b.name) return 1;
                else return 0
            });
            const render = order.slice(0,10)
            return {...state,
            page: 1,
            countries:order,
            renderCountries:render,
            }
        }
        if(action.payload === 'za'){
            const order = state.countries.sort(function(a,b){
                if(a.name<b.name)return 1;
                else if(a.name > b.name) return -1;
                else return 0
            });
            const render = order.slice(0,10)
            return {...state,
            page: 1,
            countries:order,
            renderCountries:render,
            }
        }
    }
    return state
}

export default rootReducer;