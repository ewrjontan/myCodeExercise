import React, { useState, useCallback } from 'react';
import { Button } from 'reactstrap';
import { withRouter, useHistory  } from 'react-router-dom';
import { connect } from "react-redux";
import { addSearchQuery, updateSearchInput } from '../redux/ActionCreators'

const mapStateToProps = state => {
    return {
        searchHistory: state.searchHistory,    
    }
}

const mapDispatchToProps = {
    addSearchQuery,
    updateSearchInput
}

//For input validation (matches characters after any white space at start of input)
const regex = /[a-zA-Z0-9_]+.*$/i;

function Home(props) {

    const [searchInput, setSearchInput] = useState("");
    const history = useHistory();

    //useCallback to ensure function is only redefined upon update of searchInput
    const onFormSubmit = useCallback(e => {
    //const onFormSubmit = (e) => {
        e.preventDefault();
        console.log("submit button clicked");
        console.log('searchInput:');
        console.log(searchInput);
        
        //Sanitizes input (removes possible whitespace in front of valid characters)
        //Validates that non-whitespace characters are present
        if (searchInput.match(regex)){
            console.log('input is valid');
            let sanitizedInput = searchInput.match(regex)[0];
            console.log('regex match');
            console.log(sanitizedInput);

    
            console.log('length of searchh history');
            console.log(props.searchHistory);
    
        
            //add sanitized search input and id into redux searchHistory state
            let newId = props.searchHistory.length;
            props.addSearchQuery(sanitizedInput, newId);

            props.updateSearchInput(sanitizedInput);    
            
            history.push({
                pathname: "/search",
                /*state: {
                    searchInput: sanitizedInput
                }*/
            });
        }
    }, [searchInput]);

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

                    {/*<p className="text-danger"><small>Please Enter A Valid Input.</small></p>*/}

                    <Button 
                        className="row col-10 col-md-2 btn-warning text-white mt-3"
                        type="submit"
                    >
                        Search
                    </Button>
                </form>
            </div>
        </div>
    );
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
