import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Search from './SearchComponent';
//import History from './HistoryComponent';
import { 
	Switch,
	Route,
	Redirect, 
    Link,
    NavLink
} from 'react-router-dom';


class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			
		}
		
	}

	render(){

        const HomePage = () => {
            return (
                <Home />
            )
        }

		return (

            <div>
                {/*<Navbar color="dark" light  sticky="top" expand="md">
                    <div className="container mx-auto text-center">
                    <Nav className="mx-auto col col-3 d-flex justify-content-around" navbar>
                        <NavItem>
                            <Link to="/" style={{color: 'white', textDecoration: 'none' }}>Search</Link>
                        </NavItem>
                        
                        <NavItem>
                            <Link to="/history" style={{color: 'white', textDecoration: 'none' }}>History</Link>
                        </NavItem>
                    </Nav>
                    </div>
                </Navbar>*/}
                <Header />

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
