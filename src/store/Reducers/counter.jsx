import * as actionTypes from '../actionTypes'
import { updateObject } from '../utility'

const initailState = {
    counter : 20,
}

const reducer = (state=initailState, action) => {
    switch(action.type){
        case actionTypes.INCREMENT :
            return updateObject(state, {counter : state.counter + 1})
        case actionTypes.DECREMENT :
            return updateObject(state, {counter : state.counter - 1})
        case actionTypes.ADD :
            return updateObject(state, {counter : state.counter + action.payload})
        case actionTypes.SUB :
            return updateObject(state, {counter : state.counter - action.payload})
        default :
            return state
    }
}

export default reducer
