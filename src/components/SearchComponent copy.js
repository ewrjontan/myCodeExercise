import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Fade, Stagger } from 'react-animation-components';


/*class Search extends Component{
    constructor(props){
        super(props);
        this.state = {
            
        };

    }

    render(){
        return(
            <div>Hello</div>
        )
    };
};*/



function Search() {
    const location = useLocation();
    const { searchInput } = location.state
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [searchResults, setSearchResults] = useState([]);

    function RenderResults(){
        if (searchResults.length !== 0){
            return (
                <React.Fragment>
                    <Stagger in>
                    {searchResults.map(result => {
                        return (
                            <Fade in key={result.objectID}>
                                <Link to={{ pathname: result.url }} style={{ textDecoration: 'none' }} target="_blank"> 

                                    <div className="resultCard my-5 px-3 py-3 mx-auto col-11 col-md-5 rounded">
                                        <h4 className="">{result.title}</h4>
                                        <h6 className="mt-5">Date Created: {result.created_at}</h6>
                                        <h6>Created By: {result.author}</h6>
                                    </div>
                                </Link>
                            </Fade>
                        )
                    })}
                    </Stagger>
                </React.Fragment>
            )    
        }else{
            return (
                <React.Fragment>No Results Found.</React.Fragment>
            )
        }
    }

    useEffect(() => {
        console.log("search input state: " + searchInput);

        fetch(`http://hn.algolia.com/api/v1/search?query=${searchInput}`)
            .then(response => response.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setSearchResults(result.hits);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [searchInput]);

    if (error) {
        return <div>Error: {error.message}</div>;
    }else if (!isLoaded) {
        return <div>Loading...</div>;
    }else {
        console.log(searchResults);
        return (
            <div className="mt-5">
                <h1>Showing results for "{searchInput}"</h1>
                <RenderResults />
            </div>
        )
    }
}



export default Search;

