import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

// COMPONENTS
import Artist from './Artist'

// STYLES
const ArtWrapper = styled.div`
    margin: 50px;
`
const VisualContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;

    img {
        max-height: 300px;
    }
`
const AudioStyle = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    border: 5px double yellow;
    margin: 10px;
    padding: 15px;
`
const Image = styled.div`
    float: left;
`
const AudioText = styled.div`
    float: right;

    span {
        font-weight: bold;
    }
`
const APlayer = styled.audio`
`

class ArtistWork extends Component {

    state = {
        artistId: 0,
        artistType: '',
        artistry: []
    }

    componentWillMount() {
        this.getData()
    }

    getData = async (props) => {
        const a_id = this.props.artist_id

        const res = await axios.get(`/api/artists/${a_id}/artistry`)
        await this.setState({
            artistry: res.data,
            artistId: a_id,
        })
        const resII = await axios.get(`/api/artists/${a_id}`)
        await this.setState({
            artistType: resII.data.artist_type
        })
        console.log(this.state)
    }

    render() {
        return (
            <ArtWrapper>
                {this.state.artistry.map(art => {

                    if (this.state.artistType == 'audio') {
                        return (
                            <AudioStyle className="audioArt" key={art.id} _id={art.id}>
                                <Image>
                                    <img src={art.artworkUrl100} />
                                </Image>
                                <AudioText>
                                    <p><span>Artist:</span> {art.artistName}</p>
                                    <p><span>Track:</span> {art.trackName}</p>
                                    <p><span>Album:</span> {art.collectionName}</p>
                                </AudioText>
                                <APlayer controls loop>
                                    <source src={art.previewUrl} type="audio/wav" />
                                </APlayer>
                            </AudioStyle>
                        )
                    } else {
                        return (
                            <VisualContent className="visualArt" key={art.id} _id={art.id}>
                                <h1>{art.title}</h1>
                                <img src={art.visual_url} />
                            </VisualContent>
                        )
                    }
                })}
            </ArtWrapper>
        );
    }
}

export default ArtistWork;