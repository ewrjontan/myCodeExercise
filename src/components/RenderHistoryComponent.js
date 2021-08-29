import React, { useState, useEffect } from 'react';
import { useLocation, Link, withRouter } from 'react-router-dom';
import { Fade, Stagger } from 'react-animation-components';
import { connect } from 'react-redux'


const mapStateToProps = state => {
    return {
        searchHistory: state.searchHistory,
    }
}

function RenderHistory(props) {
    console.log("render history");
    console.log(props)
    return (
        <React.Fragment>
            <Stagger in>
                {props.searchHistory.map(pastSearch => {
                    return (
                        <Fade in key={pastSearch.id}>
                                <div className="resultCard rounded mx-auto col-11 col-md-5 col-lg-4 my-5 py-3 px-3 text-start">
                                    
                                    <h4>Search Query: {pastSearch.searchInput}</h4>
                                    <h4>Date of Search: {pastSearch.date}</h4>

                                </div>
                        </Fade>
                    )
                })}
            </Stagger>
        </React.Fragment>
    )
}

export default withRouter(connect(mapStateToProps)(RenderHistory));
