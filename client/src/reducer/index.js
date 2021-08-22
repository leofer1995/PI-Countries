

const initialState = {
    countries: [],
    page: 1
}

const rootReducer = (state = initialState, action)=>{
    if(action.type === 'GET_COUNTRIES'){
        action.payload = action.payload.slice((state.page-1)*10,(state.page-1)*10+10)
        return{
            ...state,
            countries:[...action.payload]
        }
    }

    if(action.type==="PREVIOUS_PAGE"){
        if(state.page===1) return{...state,page: state.page};
        return {...state,page: state.page - 1}
    }
    
    if(action.type==="FOLLOWING_PAGE"){
        return {...state,page: state.page + 1}
    }
    return state
}

export default rootReducer;