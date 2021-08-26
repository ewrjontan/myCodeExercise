import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';



class Home extends Component {
	constructor(props){
		super(props);
		this.state = {
			searchInput: "",
			searchHistory: []
		}
		this.handleInput = this.handleInput.bind(this);
		//this.handleSubmit = this.handleSubmit.bind(this); can bind or use arrow functions

	}

	handleInput(event) {
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
	}

    render(){

    
        return (
            <div className="container">
                <h1 className="my-5 text-center">Hacker News Search</h1>

                <div className="text-center" id="searchForm">
                    <div>
                        <input className="col-10 col-md-4" type="text" name="search" value={this.state.searchInput} onChange={this.handleInput}/>
                    </div>

                    <Link to="/search">
                        <Button className="col-10 col-md-2 text-white mt-5" color="warning" type="submit" onClick={this.handleSubmit}>Search</Button>
                    </Link> 
                </div>

            </div>
        );
    };
}

export default Home;