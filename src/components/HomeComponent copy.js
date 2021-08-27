import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';



class Home extends Component {
	constructor(props){
		super(props);
		this.state = {
			searchInput: "",
			//searchHistory: []
		}
		//this.handleInput = this.handleInput.bind(this);
		//this.handleSubmit = this.handleSubmit.bind(this); can bind or use arrow functions

	}

    componentDidMount(){
        
    }

	handleInput = (event) => {
		this.setState({
		  searchInput: event.target.value
		});

		console.log("previous state:");
        console.log(this.state.searchInput);

	}

	handleSubmit = (e) => {
		//e.preventDefault();
		console.log("submit button clicked, state input is:");
		console.log(this.state.searchInput);

        console.log("current history");
        console.log(this.state.searchHistory);
        
        let updatedHistory = this.state.searchHistory;
        updatedHistory.push(this.state.searchInput);
        
        console.log("new history:");
        console.log(updatedHistory);
        this.setState({
            searchHistory: updatedHistory
        });
	}

    handleHistory = (e) => {
		//e.preventDefault();
		console.log("history button clicked, state input is:");
		//console.log(this.state.searchInput);
	}


    render(){

    
        return (
            <div className="container">
                <h1 className="my-5 text-center">Hacker News Search</h1>

                <div className="text-center">
                    <div>
                        <input className="col-10 col-md-4" type="text" name="search" value={this.state.searchInput} onChange={this.handleInput}/>
                    </div>

                    {/*<Link to="/search">*/}
                    {/*<Link 
                        to={{
                            pathname: "/search",
                            state: {
                                searchInput: this.state.searchInput
                            }
                        }}
                    >
                        <Button className="col-10 col-md-2 text-white mt-5" color="warning" type="submit" onClick={this.handleSubmit}>Search</Button>
                    </Link> */}

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

export default Home;