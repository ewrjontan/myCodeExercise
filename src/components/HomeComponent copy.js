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

//Cannot be used in class component
//const history = useHistory();

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

        console.log('length of searchh history');
        console.log(this.props.searchHistory);

        if (this.state.validInput) {
            console.log("submit button clicked, value is: " + this.state.searchInput);

            let newId = this.props.searchHistory.length;
            //add valid search input and id into redux searchHistory state
            this.props.addSearchQuery(this.state.searchInput, newId);

        }else{
            alert('Please enter a valid input');
        }
	}

    handleHistory = (e) => {
		//e.preventDefault();
		console.log("history button clicked, state input is:");
		//console.log(this.state.searchInput);
	}

    onFormSubmit = (e) => {
        e.preventDefault();
		console.log("submit button clicked");
		
        /*console.log(this.state.searchInput);
        console.log(`valid input: ${this.state.validInput}`)

        console.log('length of searchh history');
        console.log(this.props.searchHistory);

        if (this.state.validInput) {
            console.log("submit button clicked, value is: " + this.state.searchInput);

            let newId = this.props.searchHistory.length;
            //add valid search input and id into redux searchHistory state
            this.props.addSearchQuery(this.state.searchInput, newId);

        }else{
            alert('Please enter a valid input');
        }*/
	}


    render(){

    
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
                    <form onSubmit={this.onFormSubmit}>
                        <input className="col-10 col-md-4" type="text" name="search" value={this.state.searchInput} onChange={this.handleInput}/>
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
    };
}

//export default Home;
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
