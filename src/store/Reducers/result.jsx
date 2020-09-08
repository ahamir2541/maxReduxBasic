import * as actionTypes from '../actionTypes'

const initailState = {
    results : []
}

const reducer = (state=initailState, action) => {
    switch(action.type){
        case actionTypes.STORE_RESULTS :
            return {
                ...state,
                results : state.results.concat({id : new Date(), value : action.payload })
            }
        case actionTypes.STORE_DELETE :
            return {
                ...state,
                results : state.results.filter(result => result.id !== action.payload)
            }
        default :
            return state
    }
}

export default reducer