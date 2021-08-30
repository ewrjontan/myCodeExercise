import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

function Loading(){
    return (
        <div className="my-5 mx-auto">
            <FontAwesomeIcon icon={faSpinner} size="6x" spin className="my-5"/>
            <h1 className="my-5">Loading...</h1> 
        </div>
    )
};

export default Loading;