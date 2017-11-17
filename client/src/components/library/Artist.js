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
        artistId: 0,
    }

    componentWillMount = async () => {
        const { artist_id } = this.props.match.params
        this.setState({ artistId: artist_id })

        const res = await axios.get(`/api/artists/${artist_id}`)
        this.setState({ artist: res.data })

        console.log(this.state.artist.artist_type)
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
                    artist_id={this.state.artistId}
                />

            </div>
        );
    }
}

export default Artist;


                        // parseArtistry = async () => {
                        //     const artistry = this.state.artistry
                        //     const artistType = this.state.artist_type

                        //     if (artistType == 'visual') {
                        //         return (
                        //         artistry.map(art => {
                        //             {art.title}
                        //             {art.visual_url}
                        //             {art.collection_id}
                        //             {art.artist_id}
                        //         }))
                        //     } else {
                        //         return (
                        //         artistry.map(art => {
                        //             {art.song}
                        //             {art.album}
                        //             {art.audio_url}
                        //             {art.collection_id}
                        //             {art.artist_id}
                        //         }))
                        //     }
                        // }