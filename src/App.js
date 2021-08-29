import React from 'react';
import Main from './components/MainComponent';
//import { Navbar, NavbarBrand } from 'reactstrap';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import { PersistGate } from 'redux-persist/integration/react';

import { BrowserRouter } from 'react-router-dom';
import './App.css';

//for redux-persist
import Loading from './components/LoadingComponent';

const { persistor, store } = ConfigureStore(); 

//pre-persist
//const store = ConfigureStore();

function App() {
	return (
		<Provider store={store}>
			<PersistGate 
				loading={<Loading/>}
				persistor={persistor}>
				<BrowserRouter>
					<div className="App">
						<Main />
					</div>
				</BrowserRouter>
			</PersistGate>
		</Provider>
	);
}

export default App;
