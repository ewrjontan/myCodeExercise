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

function Main(props) {
    return (
        <div>
            <Header />

            <Switch>
                <Route path='/home' component={Home} />


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
    )
}

/*
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
                <Header />

                <Switch>
                    <Route path='/home' component={HomePage} />


                    <Route path='/search' component={Search}/>

                    <Route path='/history' component={History}/>

                    <Redirect to='/home' />

                </Switch>
            </div>
		);
	}
}*/


export default withRouter(connect(mapStateToProps)(Main));
