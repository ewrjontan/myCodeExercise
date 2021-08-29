import { createStore, applyMiddleware } from 'redux';
//for redux-persist
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { Reducer, initialState } from './reducer';
import thunk from 'redux-thunk';

//import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';



const persistConfig  = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, Reducer)

export const ConfigureStore = () => {
    let store = createStore(persistedReducer, applyMiddleware(thunk, logger));
    let persistor = persistStore(store);
    return { store, persistor }
}

/*export const ConfigureStore = () => {
    const store = createStore(
        persistReducer(persistConfig, {
            Reducer
        }),
        applyMiddleware(thunk, logger)
    );

    const persistor = persistStore(store);
    return {store, persistor};
};*/

//for redux-persist

//pre redux persist
/*export const ConfigureStore = () => {
    const store = createStore(
        Reducer,
        applyMiddleware(thunk, logger)
    );

    return store;
};*/