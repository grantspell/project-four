import React from 'react';

const SearchPopout = (props) => {
    return (
        <div>
            {props.searchResults.results.map(result => {
                <div>
                    <h3>{result.trackName}</h3>
                </div>
            })}
        </div>
    );
};

export default SearchPopout;