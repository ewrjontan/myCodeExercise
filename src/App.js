import Main from './components/MainComponent';
import Loading from './components/LoadingComponent';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';

const { persistor, store } = ConfigureStore(); 

function App() {
	return (
		<Provider store={store}>
			<PersistGate loading={<Loading/>} persistor={persistor}>
				<BrowserRouter>
					<div className="App">
						<Main />
					</div>
				</BrowserRouter>
			</PersistGate>
		</Provider>
	);
};

export default App;
