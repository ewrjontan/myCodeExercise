import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { RootReducer } from './reducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';


//whitelisting 'history' so only history is rehydrated and not the search input/results from previous session
const persistConfig  = {
    key: 'root',
    storage,
    whitelist: ['history']
};

const persistedReducer = persistReducer(persistConfig, RootReducer);

export const ConfigureStore = () => {
    let store = createStore(persistedReducer, applyMiddleware(thunk, logger));
    let persistor = persistStore(store);
    return { store, persistor }
};