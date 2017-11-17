import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

// STYLES
const ArtistsWrapper = styled.div`
    display: flex;
    flex-direction: !column;
    align-content: center;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 100vw;
`
const AudioArtistsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    // justify-content: center;
    align-items: center;
    margin: 25px;
    width: 45vw;
`
const VisualArtistsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    // justify-content: center;
    margin: 25px;
    width: 45vw;
`
const ImgDiv = styled.div`
    img {
        float: left;
        border-radius: 100%;
        max-height: 250px;
        border: 10px double pink;
    }
        `
const NameDiv = styled.div`
    h1{
        margin-left: -45px;
        color: black;
        text-shadow: -2px 2px 0px yellow;
    }
`
const DescriptionDiv = styled.div`

`
const ButtonDiv = styled.div`
    justify-content: flex-end;
`
const AllContent = styled.div`
    margin-left: 5px;
    max-width: 25vw;
`

class ArtistsIndex extends Component {

    state = {
        artists: [],
        song: '',
    }

    componentWillMount() {
        this.getArtists()
    }

    getArtists = async () => {
        const res = await axios.get(`/api/artists`)
        this.setState({ artists: res.data })
    }

    imgMusic = async (e) => {
        e.preventDefault()
        
        const artistId = e.target.name
        console.log(artistId)

        const res = await axios.get(`/api/artists/${artistId}/song`)
        console.log(res.data)

        this.setState({ song: res.data })
    }

    stopPlay = async (e) => {
        e.preventDefault()

        this.setState({ song: '' })
    }

    render() {
        
        return (
            <ArtistsWrapper>
                {this.state.artists.map(artist => {
                    if (artist.artist_type == 'audio') {
                        return (
                            <AudioArtistsWrapper key={artist.id} _id={artist.id}>
                                <ImgDiv><img onMouseOver={this.imgMusic} onMouseOut={this.stopPlay} name={artist.id} src={artist.artist_image} /></ImgDiv>
                                <AllContent>
                                <NameDiv><h1>{artist.name}</h1></NameDiv>

                                <DescriptionDiv><p>{artist.description}</p></DescriptionDiv>
                                <ButtonDiv><button><Link to={`/library/${artist.id}`}>Artistry</Link></button></ButtonDiv>
                                </AllContent>

                            </AudioArtistsWrapper>
                        )
                    } else {
                        return (
                            <VisualArtistsWrapper key={artist.id} _id={artist.id}>
                                <ImgDiv><img src={artist.artist_image} /></ImgDiv>
                                <AllContent>
                                <NameDiv><h1>{artist.name}</h1></NameDiv>

                                <DescriptionDiv><p>{artist.description}</p></DescriptionDiv>
                                <ButtonDiv><button><Link to={`/library/${artist.id}`}>Artistry</Link></button></ButtonDiv>
                                </AllContent>

                            </VisualArtistsWrapper>
                        )
                    }
                })}
                <embed src={this.state.song} autoPlay="true" loop="false" hidden="true" type="audio/x-m4a"></embed>
            </ArtistsWrapper>
        );
    }
}

export default ArtistsIndex;