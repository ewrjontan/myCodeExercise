import { combineReducers } from 'redux';
import { HistoryReducer } from './HistoryReducer';
import { SearchReducer } from './SearchReducer';

//import * as ActionTypes from './ActionTypes';

export const RootReducer = combineReducers({
    history: HistoryReducer,
    search: SearchReducer
})


/*export const Reducer = (state = {
    isLoading: true,
    errMess: null,
    searchResults: null, 
    searchInput: null,
    searchHistory: []
}, action) => {
    switch(action.type) {
        case ActionTypes.ADD_SEARCH_RESULTS:
            return {...state, isLoading: false, errMess: null, searchResults: action.payload};
        case ActionTypes.SEARCH_RESULTS_LOADING:
            return {...state, isLoading: true, errMess: null, searchResults: null};
        case ActionTypes.SEARCH_RESULTS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};    
        case ActionTypes.UPDATE_SEARCH_INPUT:
            const newSearchInput = action.payload;
            return {...state, searchInput: newSearchInput}; 
        case ActionTypes.UPDATE_HISTORY:
            const searchQuery = action.payload;
            return {...state, searchHistory: state.searchHistory.concat(searchQuery)};  
        default:
            return state;
    }
};*/