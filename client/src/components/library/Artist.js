import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

// COMPONENTS
import ArtistWork from './ArtistWork'

// STYLES
const ArtistInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

class Artist extends Component {

    state = {
        artist: {
            artist_image: '',
            name: '',
            artist_type: '',
            description: ''
        },
        artistry: []
    }

    componentWillMount = async () => {
        const { artist_id } = this.props.match.params
        console.log(artist_id)
        const res = await axios.get(`/api/artists/${artist_id}`)
        this.setState({ artist: res.data })

        this.getArtistry()
    }

    getArtistry = async () => {
        const artistId = this.state.artist.id
        console.log(artistId)

        const res = await axios.get(`/api/artists/${artistId}/artistry`)
        this.setState({ artistry: res.data })
        console.log(this.state.artistry)
    }
    
    render() {
        return (
            <div>
                <ArtistInfo>
                <img src={this.state.artist.artist_image} />
                <h1>{this.state.artist.name}</h1>
                <p>{this.state.artist.description}</p>
                </ArtistInfo>

                <ArtistWork
                    artistId={this.state.artist.id}
                    artistry={this.state.artistry}
                />

            </div>
        );
    }
}

export default Artist;