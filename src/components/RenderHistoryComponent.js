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
    console.log(props.searchHistory)
    
    let arrToReverse = props.searchHistory;
    let historyReversed = [...arrToReverse].reverse();

    console.log('reversed history');
    console.log(historyReversed);

    return (
        <React.Fragment>
            <Stagger in>
                {historyReversed.map(pastSearch => {
                    return (
                        <Fade in key={pastSearch.id}>
                                <div className="resultCard rounded mx-auto col-11 col-md-5 col-lg-4 my-5 py-3 px-3 text-start">
                                    <div className="row">
                                        <h5 className="col-12 col-lg-6 col-xl-3">Search Query:</h5>
                                        <h5 className="col">{pastSearch.searchInput}</h5>
                                    </div>
                                    <div className="row">
                                        <h5 className="col-12 col-lg-6 col-xl-3">Date of Search:</h5>
                                        <h5 className="col">{pastSearch.date}</h5>
                                    </div>
                                    

                                </div>
                        </Fade>
                    )
                })}
            </Stagger>
        </React.Fragment>
    )
}

export default withRouter(connect(mapStateToProps)(RenderHistory));
