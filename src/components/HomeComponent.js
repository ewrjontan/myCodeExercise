import React, { Component } from 'react';
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



class Home extends Component {
	constructor(props){
		super(props);
		this.state = {
			searchInput: "",
            validInput: false,
            pathName: ""
			//searchHistory: []
		}
		//this.handleInput = this.handleInput.bind(this);
		//this.handleSubmit = this.handleSubmit.bind(this); //can bind or use arrow functions

	}

    componentDidMount(){
        /*this.setState({
            pathName: ""
        })*/    
    }

	handleInput = (event) => {
		/*this.setState({
            searchInput: event.target.value,
        });*/

        console.log("previous state:");
        console.log(this.state.searchInput);

        //For input validation (removes possible whitespace in front of valid characters)
        if (event.target.value.match(regex)){
            console.log('input is valid');
            let validatedInput = event.target.value.match(regex)[0];
            console.log('regex match');
            console.log(validatedInput);
            //pathname is changed to prevent navigating to search page without a valid input
            //setState does not update within Link element otherwise would have placed within handleSubmit()  
            console.log('changing pathname to /search');
            this.setState({
                pathName: "/search",
                validInput: true,
                searchInput: validatedInput
            })

        }else{
            console.log('input is INVALID');
            console.log('changing pathname to ""');

            //reset state
            this.setState({
                pathName: "",
                validInput: false,
                searchInput: event.target.value
            })    
        }
	}

    //handleSubmit(event) {
	handleSubmit = () => {
		console.log("submit button clicked");
		console.log(this.state.searchInput);
        console.log(`valid input: ${this.state.validInput}`)

        if (this.state.validInput) {
            console.log("submit button clicked, value is: " + this.state.searchInput);

            //add valid search input into redux history state
            this.props.addSearchQuery(this.state.searchInput);

            //console.log('changing pathname to /search');

            /*this.setState({
                pathName: "/search"
            });

            console.log('pathName is: ');

            console.log(this.state.pathName);
            //this.props.addTodo(this.state.todoInput);*/
            
      
            //This line doesn't change
            //this.setState({ searchInput: '' })
        }else{
            alert('Please enter a valid input');
        }

	}

    handleHistory = (e) => {
		//e.preventDefault();
		console.log("history button clicked, state input is:");
		//console.log(this.state.searchInput);
	}


    render(){

    
        return (
            <div className="container" id="searchInput">
                <h1 className="my-5 text-center">Hacker News Search</h1>

                <div className="text-center">
                    <div>
                        <input className="col-10 col-md-4" type="text" name="search" value={this.state.searchInput} onChange={this.handleInput}/>
                        {/*<input className="col-10 col-md-4" type="text" name="search" value={this.state.searchInput} onChange={(e) => this.setState({ searchInput: e.target.value })}/>*/}
                    </div>
                    

                    {/*<Button 
                        className="col-10 col-md-12 mt-5 text-white" 
                        color="warning" 
                        type="submit" 
                        onClick={this.handleSubmit}
                    >
                        New Search
                    </Button>*/}

                    {/*<Link to="/search">*/}
                    
                    
                    

                    <Link 
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
                    </Link> 

                    {/*<div className="row col-10 col-md-4 mx-auto mt-3 d-flex justify-content-around">
                        <Link 
                            className="col-12 col-md-4 btn btn-warning text-white mb-3 mb-md-0"
                            onClick={this.handleSubmit}
                            to={{
                                pathname: this.state.pathName,
                                state: {
                                    searchInput: this.state.searchInput
                                }
                            }}
                        >
                            Search original
                            {/*<Button className="col col-md-12 text-white" color="warning" type="submit" onClick={this.handleSubmit}>Search2</Button>
                        </Link> 

                        

                        <Link 
                            className="col-12 col-md-4 btn btn-warning text-white mb-3 mb-md-0"
                            onClick={this.handleHistory}
                            to={{
                            pathname: "/history",
                            state: {
                                searchInput: this.state.searchInput
                                }
                            }}
                        >
                            View History
                        </Link> 
                        </div>*/}
                </div>

            </div>
        );
    };
}

//export default Home;
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
