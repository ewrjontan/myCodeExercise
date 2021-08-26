import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import { Button } from 'reactstrap';
//import Main from './components/MainComponent';
import { 
	BrowserRouter as Router,
	Switch,
	Route,
	Link 
} from 'react-router-dom';
import './App.css';

function App() {
	return (
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
					<form className="">
						<input className="col-10 col-md-6" type="text" size="lg" name="search" />
					</form>

					<Link to="/search">
						<Button className="col-10 col-md-2 text-white mt-5" color="warning" type="submit">Go</Button>
					</Link>
					
				</div>

				<Switch>
					<Route path="/search">
						<Search />
					</Route>

					<Route path="/history">
						<History />
					</Route>

					<Route path="/">
						<Home />
					</Route>
				</Switch>

			</div>
		</Router>
	);
}

function Home() {
	return <h2>Home</h2>;
}

function Search() {
	return <h2>Search</h2>;
}

function History() {
	return <h2>History</h2>;
}

export default App;
