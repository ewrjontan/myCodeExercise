import { createStore, applyMiddleware } from 'redux';
import { Reducer, initialState } from './reducer';
import thunk from 'redux-thunk';

//import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';



export const ConfigureStore = () => {
    const store = createStore(
        Reducer,
        applyMiddleware(thunk, logger)
        //initialState
    );

    return store;
};