import './index.css';

import {applyMiddleware, combineReducers, createStore} from 'redux';

import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import App from "./Components/App";

import {resultReducer} from './Reducer/Reducer';
import thunk from 'redux-thunk';


let rootReducer = combineReducers({resultReducer})
let store = createStore(rootReducer,applyMiddleware(thunk)); 

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));
