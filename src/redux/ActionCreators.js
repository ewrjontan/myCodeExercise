import * as ActionTypes from './ActionTypes';


export const fetchCampsites = (searchInput) => dispatch => {

    dispatch(campsitesLoading());

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
        .then(campsites => dispatch(addCampsites(campsites)))
        .catch(error => dispatch(campsitesFailed(error.message)));
};

export const campsitesLoading = () => ({
    type: ActionTypes.CAMPSITES_LOADING
});

export const campsitesFailed = errMess => ({
    type: ActionTypes.CAMPSITES_FAILED,
    payload: errMess
});

export const addCampsites = campsites => ({
    type: ActionTypes.ADD_CAMPSITES,
    payload: campsites
});


export const addSearchQuery = (searchInput) => (dispatch) => {
    const newSearchQuery = {
        searchInput: searchInput,
        date: new Date().toISOString()
    }

    dispatch(updateHistory(newSearchQuery));
};

export const updateHistory = searchQuery => ({
    type: ActionTypes.UPDATE_HISTORY,
    payload: searchQuery
});