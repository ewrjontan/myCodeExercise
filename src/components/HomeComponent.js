import React, { useState, useCallback } from 'react';
import { Button } from 'reactstrap';
import { withRouter, useHistory  } from 'react-router-dom';
import { connect } from "react-redux";
import { addSearchQuery, updateSearchInput } from '../redux/ActionCreators'

const mapStateToProps = state => {
    return {
        searchHistory: state.history.searchHistory,    
    };
};

const mapDispatchToProps = {
    addSearchQuery,
    updateSearchInput
};

//For input sanitization/validation (matches characters after any possible white space at start of input)
const regex = /[a-zA-Z0-9_]+.*$/i;

function Home(props) {
    let { searchHistory, addSearchQuery, updateSearchInput } = props;

    const [searchInput, setSearchInput] = useState("");
    const history = useHistory();

    //useCallback to ensure function is only redefined upon update of props
    const onFormSubmit = useCallback(e => {
        e.preventDefault();
        
        //Validates that non-whitespace characters are present
        //Sanitizes input (removes possible whitespace in front of valid characters)
        if (searchInput.match(regex)){
            let sanitizedInput = searchInput.match(regex)[0];
            
            //add sanitized search input and id into redux searchHistory state
            let newId = searchHistory.length;
            addSearchQuery(sanitizedInput, newId);
            updateSearchInput(sanitizedInput);    
            
            history.push({pathname: "/search"});
        }
    }, [searchInput, addSearchQuery, updateSearchInput, history, searchHistory.length]);

    return (
        <div className="container" id="searchInput">
            <h1 className="my-5 text-center">Hacker News Search</h1>
            <div>
                <form onSubmit={onFormSubmit}>
                    <input 
                        className="row mx-auto col-10 col-md-7 col-lg-5" 
                        type="text" 
                        name="search" 
                        value={searchInput} 
                        onChange={e => setSearchInput(e.target.value)}
                    />

                    <Button 
                        className="row col-10 col-md-2 btn-warning text-white mt-4"
                        type="submit"
                    >
                        Search
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
