import { Link, withRouter } from 'react-router-dom';
import { Fade, Stagger } from 'react-animation-components';
import { connect } from 'react-redux'

const mapStateToProps = state => {
    return {
        results: state.search.searchResults,
        searchInput: state.search.searchInput
    }
}

function RenderResults(props){
    return (
        <div>
            <h1 className="my-5">Showing results for "{props.searchInput}"</h1>
            <Stagger in>
                {props.results.map(result => {

                    //Handles issue with api returning titles in either title or story_title objects
                    //Handles issue with api returning url in either url or story_url objects
                    //Ex: enter search input of "Porsche Cayman"
                    let storyTitle = result.title;
                    let storyUrl = result.url;

                    if (result.story_title) {
                        storyTitle = result.story_title;
                    };

                    if (result.story_url) {
                        storyUrl = result.story_url;
                    }

                    return (
                        <Fade in key={result.objectID}>
                            <div className="my-5 mx-auto col-11 col-lg-5">
                                <Link to={{ pathname: storyUrl }} style={{ textDecoration: 'none' }} target="_blank"> 
                                    <div className="resultCard rounded py-3 px-3">
                                        <h3>{storyTitle}</h3>
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