import * as ActionTypes from './ActionTypes';


export const SearchReducer = (state = {
    isLoading: true,
    errMess: null,
    searchResults: null, 
    searchInput: null
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
        default:
            return state;
    }
};