import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';
import { connect } from "react-redux";

const mapStateToProps = state => {
    return {
        searchHistory: state.searchHistory,    
    }
}

const mapDispatchToProps = {
    
}

class Home extends Component {
	constructor(props){
		super(props);
		this.state = {
			searchInput: "",
            validInput: false
			//searchHistory: []
		}
		//this.handleInput = this.handleInput.bind(this);
		//this.handleSubmit = this.handleSubmit.bind(this); can bind or use arrow functions

	}

    componentDidMount(){
        
    }

	handleInput = (event) => {
        /*if (event.target.value !== ""){
            //console.log("input is valid");

            this.setState({
                searchInput: event.target.value,
                validInput: true
            });

            console.log('validInput: ' + this.state.validInput);
            console.log("previous state:");
            console.log(this.state.searchInput);
            
        }else {
            this.setState({
                validInput: false
            })
            console.log('validInput: ' + this.state.validInput);
        }*/

		this.setState({
            searchInput: event.target.value,
        });
        console.log("previous state:");
        console.log(this.state.searchInput);
	}

	handleSubmit = () => {
		console.log("submit button clicked, search input is:");
		console.log(this.state.searchInput);

        if (this.state.searchInput.length > 0) {
            // Task: add a new line to dispatch the state value to the action creator
            console.log("submit button clicked, value is: " + this.state.searchInput);
            //this.props.addTodo(this.state.todoInput);
            
      
            //This line doesn't change
            this.setState({ searchInput: '' })
        }else{
            alert('Please enter a search query');
        }

        /*if (this.state.searchInput === "") {
            alert("No input present");
            //setError("Fields are required");
            return;
        }*/
          
        //props.register({ name, email, password });



        /*console.log("current history");
        console.log(this.state.searchHistory);
        
        let updatedHistory = this.state.searchHistory;
        updatedHistory.push(this.state.searchInput);
        
        console.log("new history:");
        console.log(updatedHistory);
        this.setState({
            searchHistory: updatedHistory
        });*/
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
                        {/*<input className="col-10 col-md-4" type="text" name="search" value={this.state.searchInput} onChange={this.handleInput}/>*/}
                        <input className="col-10 col-md-4" type="text" name="search" value={this.state.searchInput} onChange={(e) => this.setState({ searchInput: e.target.value })}/>
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
                        to={{
                            pathname: "/search",
                            state: {
                                searchInput: this.state.searchInput
                            }
                        }}
                    >
                        {/*<Button className="col-10 col-md-2 text-white mt-5" color="warning" type="submit" onClick={this.handleSubmit}>Search</Button>*/}
                    </Link> 

                    <div className="row col-10 col-md-4 mx-auto mt-3 d-flex justify-content-around">
                        <Link 
                            className="col-12 col-md-4 btn btn-warning text-white mb-3 mb-md-0"
                            onClick={this.handleSubmit}
                            to={{
                                pathname: "/search",
                                state: {
                                    searchInput: this.state.searchInput
                                }
                            }}
                        >
                            Search
                            {/*<Button className="col col-md-12 text-white" color="warning" type="submit" onClick={this.handleSubmit}>Search</Button>*/}
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
                    </div>
                </div>

            </div>
        );
    };
}

//export default Home;
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
