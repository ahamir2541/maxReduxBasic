import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'

//reducers
import counter from './store/Reducers/counter'
import result from './store/Reducers/result'

const rootReducer = combineReducers({
    ctr : counter,
    res : result
})

const store = createStore(rootReducer)

ReactDOM.render(<Provider store={store} > <App /> </Provider> , document.getElementById('root'));
