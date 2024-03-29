import * as ActionTypes from './ActionTypes';

export const HistoryReducer = (state = {
    searchHistory: []
}, action) => {
    switch(action.type) {
        case ActionTypes.UPDATE_HISTORY:
            const searchQuery = action.payload;
            return {...state, searchHistory: state.searchHistory.concat(searchQuery)}; 
        case ActionTypes.CLEAR_HISTORY:
            return {...state, searchHistory: []};  
        default:
            return state;
    }
};