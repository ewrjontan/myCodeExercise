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
    let searchInput = props.searchInput;

    useEffect(() => {
        props.fetchSearchResults(searchInput);
    }, [searchInput]);

    if (props.isLoading){
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        )
    };

    if (props.errMess){
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            </div>
        )
    };

    if (props.searchResults.length !== 0){    
        console.log(props.searchResults); 
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