import Header from './HeaderComponent';
import Home from './HomeComponent';
import Search from './SearchComponent';
import History from './HistoryComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

function Main() {
    return (
        <div>
            <Header />
            <Switch>
                <Route path='/home' component={Home}/>
                <Route path='/search' component={Search}/>
                <Route path='/history' component={History}/>
                <Redirect to='/home'/>
            </Switch>
        </div>
    )
};

export default Main;
