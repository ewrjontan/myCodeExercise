import { combineReducers } from 'redux';
import { HistoryReducer } from './HistoryReducer';
import { SearchReducer } from './SearchReducer';

export const RootReducer = combineReducers({
    history: HistoryReducer,
    search: SearchReducer
});