import React from 'react'; //needed for React.Fragment and createRef (used to get rid of findDoMNode deprecation error)
import { withRouter } from 'react-router-dom';
import { Fade, Stagger } from 'react-animation-components';
import { connect } from 'react-redux'

const mapStateToProps = state => {
    return {
        searchHistory: state.history.searchHistory,
    };
};

function RenderHistory(props) {
    let arrToReverse = props.searchHistory;
    let historyReversed = [...arrToReverse].reverse();

    return (
        <React.Fragment>
            <Stagger in>
                {historyReversed.map(pastSearch => {
                    return (
                        <Fade in key={pastSearch.id} nodeRef={React.createRef()}>
                                <div className="resultCard rounded mx-auto col-11 col-md-5 col-lg-4 my-5 py-3 px-3 text-start">
                                    
                                    <div className="row pb-3">
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
};

export default withRouter(connect(mapStateToProps)(RenderHistory));
