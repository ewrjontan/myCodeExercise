import React, { useState, useEffect, useCallback } from 'react';
import { Loading } from './LoadingComponent';
import { useLocation, Link, withRouter } from 'react-router-dom';
import { Fade, Stagger } from 'react-animation-components';

import { fetchSearchResults } from '../redux/ActionCreators'
//import { Reducer } from './redux/reducer'
import { connect } from 'react-redux'


const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        errMess: state.errMess,
        searchResults: state.searchResults
    }
}

const mapDispatchToProps = {
    fetchSearchResults 
}


function Search(props) {
    const location = useLocation();
    const { searchInput } = location.state
    console.log('search input');
    console.log(searchInput);

    useEffect(() => {
        console.log('on search page');
        console.log("search input state: " + searchInput);
        console.log('props:');
        console.log(props);
        props.fetchSearchResults(searchInput);
    }, [searchInput]);

    if (props.isLoading){
        return (
            <div className="container">
                <div className="row">
                    <Loading />

                </div>
            </div>
        );
    }

    if (props.errMess){
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            </div>
        );
    }

    if (props.searchResults.length !== 0){
            
        let results = props.searchResults;

        return (
            <RenderResults results={results} searchInput={searchInput}/>
        )    
    }else{
        return (
            <div className="mx-auto my-5 col-10 col-lg-5 text-break">
                <h3 className="my-5">No results found for "{searchInput}"</h3>
            </div>
        )
    }
}

function RenderResults(props){
    return (
        <div>
            <h1 className="my-5">Showing results for"{props.searchInput}"</h1>
            <Stagger in>
                {props.results.map(result => {
                    return (
                        <Fade in key={result.objectID}>
                            <div className="my-5 mx-auto col-11 col-lg-5">
                                <Link to={{ pathname: result.url }} style={{ textDecoration: 'none' }} target="_blank"> 

                                    <div className="resultCard rounded py-3 px-3">
                                        <h4 className="">{result.title}</h4>
                                        <h6 className="mt-5">Date Created: {result.created_at}</h6>
                                        <h6>Created By: {result.author}</h6>
                                    </div>
                                </Link>
                            </div>
                        </Fade>
                    )
                })}
            </Stagger>
        </div>
    )    
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));