

const initialState = {
    countries: [],//todos los paises que tengo de respuesta de la api
    resultCountries:[],//resultado de los filtros y busquedas
    renderCountries:[],//los paises renderizados por pagina
    activities:[],
    pages: 0,
    page: 1,  
}

const rootReducer = (state = initialState, action)=>{
    if(action.type === 'GET_COUNTRIES'){// se ejecuta una vez cuando renderizo por primera vez el componente flags
        console.log(action.payload)
        return{
            ...state,
            countries:[...action.payload.countries],
            resultCountries:[...action.payload.countries],
            activities:[...action.payload.activities]
        }
    }

    if(action.type==="GET_RENDER"){//se ejecuta la primera vez y cada vez que altualizo el estado page
        const render = state.resultCountries.slice((state.page-1)*10,(state.page-1)*10+10)
        const pages = Math.ceil(state.resultCountries.length/10)
        return {
            ...state,
            renderCountries:render,
            pages:pages
        }
    }

    if(action.type==="PREVIOUS_PAGE"){//actualiza el state page
        if(state.page === 1) return {...state,page:state.page}
        if(action.payload)return {...state,page:action.payload}
        return {...state,page: state.page - 1,}
    }
    
    if(action.type==="FOLLOWING_PAGE"){//actualiza es state page
        const finalPage = Math.ceil(state.resultCountries.length/10)
        if(state.page === finalPage) return {...state,page: state.page}
        if(action.payload)return {...state,page: action.payload}
        return {...state,page: state.page + 1,}
    }

    if(action.type==="SEARCH_COUNTRY"){//busca y renderiza el pais
        action.payload=action.payload.toLowerCase()
        const large = action.payload.length
        const country = state.resultCountries.filter((coun)=> coun.name.substr(0,large)===action.payload)
        const pages = Math.ceil(country.length/10)
        return {
            ...state, 
            page:1,
            resultCountries:country,
            renderCountries:country.slice(0,10) ,
            pages:pages 
        }
    }

    if(action.type === "ORDER_COUNTRIES"){
        if(action.payload === 'asd'){
            const order = state.resultCountries.sort(function(a,b){return a.population - b.population})
            const render = order.slice(0,10)
            return {...state,
            page: 1,
            resultCountries:order,
            renderCountries:render,
            }
        }
        if(action.payload === 'des'){
            const order = state.resultCountries.sort(function(a,b){return b.population - a.population})
            const render = order.slice(0,10)
            return {...state,
            page: 1,
            resultCountries:order,
            renderCountries:render,
            }
        }
        if(action.payload === 'az'){
            const order = state.resultCountries.sort(function(a,b){
                if(a.name<b.name)return -1;
                else if(a.name > b.name) return 1;
                else return 0
            });
            const render = order.slice(0,10)
            return {...state,
            page: 1,
            resultCountries:order,
            renderCountries:render,
            }
        }
        if(action.payload === 'za'){
            const order = state.resultCountries.sort(function(a,b){
                if(a.name<b.name)return 1;
                else if(a.name > b.name) return -1;
                else return 0
            });
            const render = order.slice(0,10)
            return {...state,
            page: 1,
            resultCountries:order,
            renderCountries:render,
            }
        }
    }

    if(action.type==="FILTER_COUNTRIES"){
        let filter = []
        console.log(action.payload)
        if(typeof action.payload === 'string'){
            filter = action.payload==='All' ? state.countries : state.countries.filter(country=>country.continent === action.payload);
        }else{
            filter = action.payload
            // const mapeo = action.payload.map(con=>con.code)
            // filter = state.countries.filter(count=>{
            //     for(let i = 0; i < mapeo.length;i++){
            //         if(mapeo[i]===count.code){
            //             return true
            //         }
            //     }
            //     return false
            // })
        }
        const pages = Math.ceil(filter.length/10)
        const render = filter.slice(0,10)

        return {
            ...state,
            page:1,
            resultCountries:filter,
            renderCountries:render,
            pages:pages
        }
    }

    return state
}

export default rootReducer;