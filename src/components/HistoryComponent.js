import React, { useState, useEffect } from 'react';
import { useLocation, Link, withRouter } from 'react-router-dom';
import RenderHistory from './RenderHistoryComponent';
import { Fade, Stagger } from 'react-animation-components';

import { fetchCampsites } from '../redux/ActionCreators'
import { connect } from 'react-redux'

const mapStateToProps = state => {
    return {
        /*isLoading: state.isLoading,
        errMess: state.errMess,
        campsites: state.campsites,*/
        searchHistory: state.history.searchHistory,
    }
}

function History(props){
    console.log('History:');
    console.log(props.searchHistory);

    if (props.searchHistory.length === 0){
        return (
            <h1 className="mt-5">No searches have been made.</h1>  
        )  
    }else{

        return (
            <div className="mt-5">
                <h1>Search History</h1>
                <RenderHistory />
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps)(History));

