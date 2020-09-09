import { INCREMENT, DECREMENT, ADD, SUB, STORE_RESULTS, STORE_DELETE } from '../actionTypes'

export const increment = () => {
    return {
        type : INCREMENT
    }
}

export const decrement = () => {
    return {
        type : DECREMENT
    }
}

export const add = (value) => {
    return {
        type : ADD,
        payload : value
    }
}

export const sub = (value) => {
    return {
        type : SUB,
        payload : value
    }
}

const saveResult = (res) => {
    // const updatedResult = res * 2
    return {
        type : STORE_RESULTS,
        payload : res
    }
}

export const storeResult = (res) => {
    return (dispatch, getState) => {
        setTimeout(() => {
            const oldCounter = getState().ctr.counter
            console.log(oldCounter)
            dispatch(saveResult(res))
        }, 2000)
    }
}

export const storeDelete = (value) => {
    return {
        type : STORE_DELETE,
        payload : value
    }
}
