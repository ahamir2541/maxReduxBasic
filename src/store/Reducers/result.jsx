import * as actionTypes from '../actionTypes'
import { updateObject } from '../utility'

const initailState = {
    results : []
}

const reducer = (state=initailState, action) => {
    switch(action.type){
        case actionTypes.STORE_RESULTS :
            return updateObject(state, {results : state.results.concat({id : new Date(), value : action.payload * 3 })})
        case actionTypes.STORE_DELETE :
            return updateObject(state, {results : state.results.filter(result => result.id !== action.payload)})
        default :
            return state
    }
}

export default reducer