import { createStore, applyMiddleware, combineReducers } from 'redux';

//for redux-persist
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


/*import { Reducer } from './reducer';
import { HistoryReducer } from './HistoryReducer';
import { SearchReducer } from './SearchReducer';*/

//for combine reducer
import { RootReducer } from './reducer';


import thunk from 'redux-thunk';
import logger from 'redux-logger';


//whitelisting 'history' so only history is rehydrated and not the search input/results from the last session
const persistConfig  = {
    key: 'root',
    storage,
    whitelist: ['history']
}

//for before combine reducer
//const persistedReducer = persistReducer(persistConfig, Reducer)
const persistedReducer = persistReducer(persistConfig, RootReducer);

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