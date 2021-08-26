import React, { Component } from 'react';
//import { Navbar, NavbarBrand } from 'reactstrap';
import { Button } from 'reactstrap';
import Home from './HomeComponent';
import Search from './SearchComponent';
//import History from './HistoryComponent';
import { 
	Switch,
	Route,
	Redirect, 
    Link
} from 'react-router-dom';


class App extends Component {
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

        const HomePage = () => {
            return (
                <Home />
            )
        }

		return (

            <div>
                <Switch>
						<Route path="/search" component={Search}/>

						<Route path="/history">
							<History />
						</Route>

						<Route path="/">
							<Home />
						</Route>
					</Switch>
            </div>

			<Router>
				<div>
					<nav>
						<ul>
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/search">Search</Link>
							</li>
							<li>
								<Link to="/history">History</Link>
							</li>
						</ul>
					</nav>

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
			</Router>
		);
	}
}

/*function Home() {
	return <h2>Home</h2>;
}*/

/*function Search() {
	return <h2>Search</h2>;
}*/

function History() {
	return <h2>History</h2>;
}

export default App;
