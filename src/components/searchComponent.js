import React, { useEffect } from 'react';
import Loading from './LoadingComponent';
import { useLocation, Link, withRouter } from 'react-router-dom';
import { Fade, Stagger } from 'react-animation-components';
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
}

const mapDispatchToProps = {
    fetchSearchResults 
}


function Search(props) {
    //used for state passed through history.push()
    /*const location = useLocation();
    const { searchInput } = location.state*/
    console.log('search input');
    let searchInput = props.searchInput;
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
            
        //let results = props.searchResults;

        return (
            <RenderResults />
        )    
    }else{
        return (
            <div className="mx-auto my-5 col-10 col-lg-5 text-break">
                <h3 className="my-5">No results found for "{searchInput}"</h3>
            </div>
        )
    }
}

//need to add to return {/*<RenderResults results={results} searchInput={searchInput}/>*/}
/*function RenderResults(props){
    console.log('props of renderResults');
    console.log(props);
    return (
        <div>
            <h1 className="my-5">Showing results for "{props.searchInput}"</h1>
            <Stagger in>
                {props.results.map(result => {
                    return (
                        <Fade in key={result.objectID}>
                            <div className="my-5 mx-auto col-11 col-lg-5">
                                <Link to={{ pathname: result.url }} style={{ textDecoration: 'none' }} target="_blank"> 

                                    <div className="resultCard rounded py-3 px-3">
                                        <h3>{result.title}</h3>
                                        <h6 className="mt-3">Date Created: {result.created_at}</h6>
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
};*/

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));