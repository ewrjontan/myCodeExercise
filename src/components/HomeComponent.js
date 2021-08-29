import React, { Component, useState } from 'react';
import { Button } from 'reactstrap';
import { Link, withRouter, useHistory  } from 'react-router-dom';
import { connect } from "react-redux";
import { addSearchQuery } from '../redux/ActionCreators'

const mapStateToProps = state => {
    return {
        searchHistory: state.searchHistory,    
    }
}

const mapDispatchToProps = {
    addSearchQuery
}

//For input validation (matches characters after any white space at start of input)
const regex = /[a-zA-Z0-9_]+.*$/i;

function Home(props) {

    const [searchInput, setSearchInput] = useState("");
    const [validInput, setValidInput] = useState(false);
    const history = useHistory();

    const onFormSubmit = (e) => {
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

            history.push({
                pathname: "/search",
                state: {
                    searchInput: sanitizedInput
                }
              });
        }
    }



        return (
            <div className="container" id="searchInput">
                <h1 className="my-5 text-center">Hacker News Search</h1>

                <div className="text-center">
                    {/*Good to use*/}
                    {/*<div>
                        <input className="col-10 col-md-4" type="text" name="search" value={this.state.searchInput} onChange={this.handleInput}/>
                    </div>*/}

                        {/*<input className="col-10 col-md-4" type="text" name="search" value={this.state.searchInput} onChange={(e) => this.setState({ searchInput: e.target.value })}/>*/}
                    
                    

                    {/*<Button 
                        className="col-10 col-md-12 mt-5 text-white" 
                        color="warning" 
                        type="submit" 
                        onClick={this.handleSubmit}
                    >
                        New Search
                    </Button>*/}
                    <form onSubmit={onFormSubmit}>
                        <input 
                            className="col-10 col-md-4" 
                            type="text" 
                            name="search" 
                            value={searchInput} 
                            onChange={e => setSearchInput(e.target.value)}
                        />

                        {/*<p className="text-danger"><small>Please Enter A Valid Input.</small></p>*/}

                        <Button className="col-10 col-md-2 btn-warning text-white mt-3"
                            type="submit"
                        >
                            Search
                        </Button>
                    </form>

                    {/*link below is good to use*/}

                    {/*<Link 
                        className="col-10 col-md-2 btn btn-warning text-white mt-3"
                        onClick={this.handleSubmit}
                        to={{
                            pathname: this.state.pathName,
                            state: {
                                searchInput: this.state.searchInput
                            }
                        }}
                    >
                        Search
                    </Link> */}

                </div>

            </div>
        );
    
}

//export default Home;
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
