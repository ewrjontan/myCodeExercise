import React, { useState, useEffect } from 'react';
import { useLocation, Link, withRouter } from 'react-router-dom';
import { Fade, Stagger } from 'react-animation-components';

import { fetchCampsites } from '../redux/ActionCreators'
//import { Reducer } from './redux/reducer'
import { connect } from 'react-redux'

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        errMess: state.errMess,
        campsites: state.campsites,
        searchHistory: state.searchHistory,
    }
}

function History(props){
    console.log('History:');
    console.log(props.searchHistory);

    return (
        <div>This is history page</div>
    )
}

export default withRouter(connect(mapStateToProps)(History));