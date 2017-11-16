import React from 'react';

const ArtistWork = (props) => {
    return (
        <div>
            {props.artistId}
            {props.artistry}
        </div>
    );
};

export default ArtistWork;