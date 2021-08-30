import React, { useState, useEffect } from 'react';
import { useLocation, Link, withRouter } from 'react-router-dom';
import { Fade, Stagger } from 'react-animation-components';
import { connect } from 'react-redux'


const mapStateToProps = state => {
    return {
        results: state.search.searchResults,
        searchInput: state.search.searchInput
    }
}

function RenderResults(props){
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
};
export default withRouter(connect(mapStateToProps)(RenderResults));
