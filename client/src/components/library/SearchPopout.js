import React from 'react';
import styled from 'styled-components';

// STYLES
const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    display: block;
`
const Track = styled.div`
    color: black;
    background-color: red;

    img {
        max-height: 100px;
    }
`
const APlayer = styled.audio`

`

const SearchPopout = (props) => {
    return (
        <Wrapper>
            <Track id={props.searchResults[0].id}>
                <img src={props.searchResults[0].artworkUrl100} alt={props.searchResults[0].artistName} />
                <h3>Name: {props.searchResults[0].trackName}</h3>
                <h3>Artist: {props.searchResults[0].artistName}</h3>
                <h3>Album: {props.searchResults[0].collectionName}</h3>
                <APlayer controls loop>
                    <source src={props.searchResults[0].previewUrl} type="audio/wav" />
                </APlayer>
            </Track>
            <Track id={props.searchResults[1].id}>
                <img src={props.searchResults[1].artworkUrl100} alt={props.searchResults[0].artistName} />
                <h3>Name: {props.searchResults[1].trackName}</h3>
                <h3>Artist: {props.searchResults[1].artistName}</h3>
                <h3>Album: {props.searchResults[1].collectionName}</h3>
                <APlayer controls loop>
                    <source src={props.searchResults[1].previewUrl} type="audio/wav" />
                </APlayer>
            </Track>
            <Track id={props.searchResults[2].id}>
                <img src={props.searchResults[2].artworkUrl100} alt={props.searchResults[0].artistName} />
                <h3>Name: {props.searchResults[2].trackName}</h3>
                <h3>Artist: {props.searchResults[2].artistName}</h3>
                <h3>Album: {props.searchResults[2].collectionName}</h3>
                <APlayer controls loop>
                    <source src={props.searchResults[2].previewUrl} type="audio/wav" />
                </APlayer>
            </Track>
            <Track id={props.searchResults[3].id}>
                <img src={props.searchResults[3].artworkUrl100} alt={props.searchResults[0].artistName} />
                <h3>Name: {props.searchResults[3].trackName}</h3>
                <h3>Artist: {props.searchResults[3].artistName}</h3>
                <h3>Album: {props.searchResults[3].collectionName}</h3>
                <APlayer controls loop>
                    <source src={props.searchResults[3].previewUrl} type="audio/wav" />
                </APlayer>
            </Track>
            <Track id={props.searchResults[4].id}>
                <img src={props.searchResults[4].artworkUrl100} alt={props.searchResults[0].artistName} />
                <h3>Name: {props.searchResults[4].trackName}</h3>
                <h3>Artist: {props.searchResults[4].artistName}</h3>
                <h3>Album: {props.searchResults[4].collectionName}</h3>
                <APlayer controls loop>
                    <source src={props.searchResults[4].previewUrl} type="audio/wav" />
                </APlayer>
            </Track>
        </Wrapper>
    );
};

export default SearchPopout;