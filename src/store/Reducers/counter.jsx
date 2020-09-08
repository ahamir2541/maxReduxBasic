import * as actionTypes from '../actionTypes'

const initailState = {
    counter : 20,
}

const reducer = (state=initailState, action) => {
    switch(action.type){
        case actionTypes.INCREMENT :
            return {
                ...state,
                counter : state.counter + 1
            }
        case actionTypes.DECREMENT :
            return {
                ...state,
                counter : state.counter - 1
            }
        case actionTypes.ADD :
            return {
                ...state,
                counter : state.counter + action.payload
            }
        case actionTypes.SUB :
            return {
                ...state,
                counter : state.counter - action.payload
            }
        default :
            return state
    }
}

export default reducer
