import * as ActionTypes from './ActionTypes';


export const fetchSearchResults = (searchInput) => dispatch => {

    dispatch(searchResultsLoading());

    return fetch(`http://hn.algolia.com/api/v1/search?query=${searchInput}`)
        .then(response => {
                if (response.ok){
                    return response;
                }else{
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then(response => response.json())
        .then(searchResults => dispatch(addSearchResults(searchResults.hits)))
        .catch(error => dispatch(searchResultsFailed(error.message)));
};

export const searchResultsLoading = () => ({
    type: ActionTypes.SEARCH_RESULTS_LOADING
});

export const searchResultsFailed = errMess => ({
    type: ActionTypes.SEARCH_RESULTS_FAILED,
    payload: errMess
});

export const addSearchResults = results => ({
    type: ActionTypes.ADD_SEARCH_RESULTS,
    payload: results
});

export const updateSearchInput = searchInput => ({
    type: ActionTypes.UPDATE_SEARCH_INPUT,
    payload: searchInput
});

export const addSearchQuery = (searchInput, id) => (dispatch) => {
    const newSearchQuery = {
        searchInput: searchInput,
        date: new Date().toISOString(),
        id: id
    }
    dispatch(updateHistory(newSearchQuery));
};

export const updateHistory = searchQuery => ({
    type: ActionTypes.UPDATE_HISTORY,
    payload: searchQuery
});