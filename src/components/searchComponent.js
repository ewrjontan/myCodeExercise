import React, { useEffect } from 'react';
import Loading from './LoadingComponent';
import { withRouter } from 'react-router-dom';
import RenderResults from './RenderResultsComponent';
import { fetchSearchResults } from '../redux/ActionCreators'
import { connect } from 'react-redux'

const mapStateToProps = state => {
    return {
        isLoading: state.search.isLoading,
        errMess: state.search.errMess,
        searchResults: state.search.searchResults,
        searchInput: state.search.searchInput
    }
};

const mapDispatchToProps = {
    fetchSearchResults 
};

function Search(props) {
    let { searchInput, isLoading, errMess, searchResults, fetchSearchResults} = props;

    useEffect(() => {
        fetchSearchResults(searchInput);
    }, [fetchSearchResults, searchInput]);

    if (isLoading){
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        )
    };

    if (errMess){
        return (
            <div className="container">
                <div className="row">
                    <div className="col my-5">
                        <h3>Uh-oh, looks like we had the following problem.</h3>
                        <h1 className="my-5">{errMess}</h1>
                        <h3>Please try again.</h3>
                    </div>
                </div>
            </div>
        )
    };

    if (searchResults.length !== 0){    
        return (
            <RenderResults />
        )    
    }else{
        return (
            <div className="mx-auto my-5 col-10 col-lg-5 text-break">
                <h3 className="my-5">No results found for "{searchInput}"</h3>
            </div>
        )
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));