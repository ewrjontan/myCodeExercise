/*export const initialState = {
    searchHistory: ['cars']
};

export const Reducer = (state = initialState, action) => {
    return state;
};*/

import * as ActionTypes from './ActionTypes';

export const Reducer = (state = {
        isLoading: true,
        errMessage: null,
        searchHistory: ['cars']
    }, action) => {
        switch(action.type) {
            case ActionTypes.ADD_SEARCH_RESULTS:
                return {...state, isLoading: false, errMess: null, searchResults: action.payload};
            case ActionTypes.SEARCH_LOADING:
                return {...state, isLoading: true, errMess: null, searchResults: []};
            case ActionTypes.SEARCH_FAILED:
                return {...state, isLoading: false, errMess: action.payload};  
            case ActionTypes.ADD_SEARCH_TO_HISTORY:
                const searchQuery = action.payload;
                return {...state, searchHistory: state.searchHistory.concat(searchQuery)};
            default:
                return state;
        }
};