import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

// STYLES
const ArtistsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 10px;

    img {
        float: left;
        border-radius: 100%;
        max-height: 300px;
    }
    h1{
        margin-left: -45px;
        color: black;
        text-shadow: -2px 1px 0px yellow;
    }
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
                        <ArtistsWrapper key={artist.id} _id={artist.id}>
                            <img src={artist.artist_image} />
                            <h1>{artist.name}</h1>
                            <h3>Type: {artist.artist_type}</h3>
                            <p>{artist.description}</p>
                            <button>Artistry</button>
                        </ArtistsWrapper>
                    )
                })}
            </div>
        );
    }
}

export default ArtistsIndex;