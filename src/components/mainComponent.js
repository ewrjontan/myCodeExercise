import React, { Component } from 'react';
//import { Navbar, NavbarBrand } from 'reactstrap';
import Home from './HomeComponent';
import Search from './SearchComponent';
//import History from './HistoryComponent';
import { 
	Switch,
	Route,
	Redirect, 
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
                    <Route path='/home' component={HomePage} />
                    <Route path='/search' component={Search}/>

                    <Route path='/history'>
                        <History />
                    </Route>

                    <Redirect to='/home' />

                </Switch>
            </div>

			
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
