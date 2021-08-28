import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Search from './SearchComponent';
import History from './HistoryComponent';
import { 
	Switch,
	Route,
	Redirect, 
    Link,
    NavLink,
    withRouter
} from 'react-router-dom';
import { connect } from 'react-redux';


const mapStateToProps = state => {
    return {
        searchHistory: state.searchHistory,
        isLoading: state.isLoading,
        errMess: state.errMess,
        searchResults: state.searchResults
    };
}

class Main extends Component {
	
    componentDidMount(){
        console.log('main comp mounted');
        console.log('initial history');
        console.log(this.props);
    }

	render(){

        const HomePage = () => {
            return (
                <Home/>
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

                    {/*<Route 
                        exact path='/history' 
                        render={() => 
                            <History searchHistory={this.props.searchHistory}/>
                        }
                    />*/}

                    <Route path='/history' component={History}/>

                    <Redirect to='/home' />

                </Switch>
            </div>

			
		);
	}
}

/*function Home() {
	return (
        <div>
            <h2>Home</h2>

            <input />
        </div>
        
    )
}*/

/*function Search() {
	return <h2>Search</h2>;
}*/

/*function History() {
	return (
        <div>
            <h2>History</h2>
        </div>
    );
}*/

export default withRouter(connect(mapStateToProps)(Main));
