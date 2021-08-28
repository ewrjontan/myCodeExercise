import React, { useState, useEffect } from 'react';
import { Loading } from './LoadingComponent';
import { useLocation, Link, withRouter } from 'react-router-dom';
import { Fade, Stagger } from 'react-animation-components';

//import { /*fetchCampsites*/ addSearchQuery } from '../redux/ActionCreators'
//import { Reducer } from './redux/reducer'
import { connect } from 'react-redux'


const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        errMess: state.errMess,
        campsites: state.campsites
    }
}

const mapDispatchToProps = {
    //fetchCampsites
    //addSearchQuery 
}

function Search(props) {
    const location = useLocation();
    const { searchInput } = location.state
    console.log('search input');
    console.log(searchInput);

    /*const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [searchResults, setSearchResults] = useState([]);*/

    function RenderResults(){

        if (props.isLoading){
            return (
                <div className="container">
                    <div className="row">
                        <Loading />

                    </div>
                </div>
            );
        }


        /*if (searchResults.length !== 0){
            return (
                <React.Fragment>
                    <Stagger in>
                    {searchResults.map(result => {
                        return (
                            <Fade in key={result.objectID}>
                                <Link to={{ pathname: result.url }} style={{ textDecoration: 'none' }} target="_blank"> 

                                    <div className="resultCard my-5 px-3 py-3 mx-auto col-11 col-md-5 rounded">
                                        <h4 className="">{result.title}</h4>
                                        <h6 className="mt-5">Date Created: {result.created_at}</h6>
                                        <h6>Created By: {result.author}</h6>
                                    </div>
                                </Link>
                            </Fade>
                        )
                    })}
                    </Stagger>
                </React.Fragment>
            )    
        }else{
            return (
                <React.Fragment>No Results Found.</React.Fragment>
            )
        }*/

        return (
            <h2>the search component works</h2>
        )
    }

    useEffect(() => {
        console.log('on search page');
        //console.log("search input state: " + searchInput);
        console.log('props:');
        console.log(props);
        //this.props.fetchCampsites(searchInput);
    

        /*fetch(`http://hn.algolia.com/api/v1/search?query=${searchInput}`)
            .then(response => response.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setSearchResults(result.hits);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )*/
    }, [searchInput]);

    /*if (this.props.errMess) {
        //return <div>Error: {error.message}</div>;
        return <div>Error: insert error message here</div>;
    }else if (this.props.isLoading) {
        return <div>Loading...</div>;
    }else {
        //console.log(searchResults);
        return (
            <div className="mt-5">
                <h1>Showing results for "{searchInput}"</h1>
                <RenderResults />
            </div>
        )
    }*/

    return (
        <div>
            <h1 className="my-5">search results page</h1>
            <RenderResults/>
        </div>
        


    )
    
}


//export default Search;
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));