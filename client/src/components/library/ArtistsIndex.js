import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

// STYLES
const ArtistsWrapper = styled.div`
    
`

class ArtistsIndex extends Component {

    state = {
        artists: []
    }
    
    componentWillMount() {
        this.getArtists()
    }

    getArtists = async () => {
        const res = await axios.get(`/api/artists`)
        this.setState({ artists: res.data })
    }
    
    render() {
        return (
            <div>
                {this.state.artists.map(artist => {
                    return (
                        <div key={artist.id} _id={artist.id}>
                            <img src={artist.artist_image} />
                            <h1>{artist.name}</h1>
                            <h3>Type: {artist.artist_type}</h3>
                            <p>{artist.description}</p>
                            <button>Artistry</button>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default ArtistsIndex;