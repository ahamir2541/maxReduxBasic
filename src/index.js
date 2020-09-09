import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

//reducers
import counter from './store/Reducers/counter'
import result from './store/Reducers/result'

const rootReducer = combineReducers({
    ctr : counter,
    res : result
})

const logger = store => {
    return next => {
        return action => {
            console.log('[Middlware] Dispatching', action)
            const result = next(action)
            console.log('[Middleware next state]', store.getState())
            return result
        }
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)))

ReactDOM.render(<Provider store={store} > <App /> </Provider> , document.getElementById('root'));
