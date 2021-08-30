import { withRouter } from 'react-router-dom';
import RenderHistory from './RenderHistoryComponent';
import { clearHistory } from '../redux/ActionCreators'
import { connect } from 'react-redux';
import { Button } from 'reactstrap';

const mapStateToProps = state => {
    return {
        searchHistory: state.history.searchHistory,
    };
};

const mapDispatchToProps = {
    clearHistory
};

function History(props){
    
    const handleClearHistory = e => {
        e.preventDefault();
        props.clearHistory();    
    };

    if (props.searchHistory.length === 0){
        return (
            <h1 className="mt-5 px-3">No searches have been made.</h1>  
        ) 
    }else{
        return (
            <div className="mt-5 px-3">
                <h1>Search History</h1>

                <Button 
                    className="row col-11 col-md-2 btn-warning text-white mt-3"
                    onClick={handleClearHistory}
                >
                    Clear History
                </Button>

                <RenderHistory />
            </div>
        )
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(History));

