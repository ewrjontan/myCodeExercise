import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons'


export const Loading = () => {
    return (
        <div className="my-5 mx-auto">
            <FontAwesomeIcon icon={faSpinner} size="6x" spin className="my-5"/>
            <h1 className="my-5">Loading...</h1> 
        </div>
    );
}