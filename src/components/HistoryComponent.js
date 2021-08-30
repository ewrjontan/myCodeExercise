import { withRouter } from 'react-router-dom';
import RenderHistory from './RenderHistoryComponent';
import { connect } from 'react-redux'

const mapStateToProps = state => {
    return {
        searchHistory: state.history.searchHistory,
    };
};

function History(props){
    if (props.searchHistory.length === 0){
        return (
            <h1 className="mt-5">No searches have been made.</h1>  
        ) 
    }else{
        return (
            <div className="mt-5">
                <h1>Search History</h1>
                <RenderHistory />
            </div>
        )
    };
};

export default withRouter(connect(mapStateToProps)(History));

