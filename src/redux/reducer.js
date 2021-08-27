/*export const initialState = {
    searchHistory: ['cars']
};

export const Reducer = (state = initialState, action) => {
    return state;
};*/

import * as ActionTypes from './ActionTypes';

/*export const Reducer = (state = {
        isLoading: true,
        errMessage: null,
        searchHistory: ['cars']
    }, action) => {
        switch(action.type) {
            /*case ActionTypes.API_REQUEST:
                return {...state, isLoading: false, errMess: null, searchResults: action.payload};
            case ActionTypes.API_LOADING:
                return {...state, isLoading: true, errMess: null, searchResults: []};
            case ActionTypes.API_ERROR:
                return {...state, isLoading: false, errMess: action.payload};  
            case ActionTypes.ADD_SEARCH_TO_HISTORY:
                const searchQuery = action.payload;
                return {...state, searchHistory: state.searchHistory.concat(searchQuery)};
            default:
                return state;
        }
};*/

export const Reducer = (state = {
    isLoading: true,
    errMess: null,
    campsites: [], 
    searchHistory: ['cars']
}, action) => {
    switch(action.type) {
        case ActionTypes.ADD_CAMPSITES:
            return {...state, isLoading: false, errMess: null, campsites: action.payload};
        case ActionTypes.CAMPSITES_LOADING:
            return {...state, isLoading: true, errMess: null, campsites: []};
        case ActionTypes.CAMPSITES_FAILED:
            return {...state, isLoading: false, errMess: action.payload};    
        default:
            return state;
    }
};