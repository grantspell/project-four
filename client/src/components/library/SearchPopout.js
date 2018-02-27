import React from 'react';
import styled from 'styled-components';

// STYLES
const Wrapper = styled.div`
    height: 100%;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    wrap: flex-wrap;

`
const Track = styled.div`
    color: black;
    background-color: rgba(0,0,0,.04);
    margin: 20px 10px 20px 10px;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    img {
        max-height: 100px;
    }
`
const TrackHead = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`
const AlbumArt = styled.div`

`
const TrackDetails = styled.div`

`
const AddButton = styled.div`
    
`
const APlayer = styled.audio`

`

const SearchPopout = (props) => {

    const storeTrack = (e, name) => {
        e.preventDefault();

        let trackID = this.props.name;
        console.log(trackID)
        this.storeTrack(trackID);
    }

    return (
        <Wrapper>
            <Track id={props.searchResults[0].id}>
                <TrackHead>
                    <AlbumArt>
                        <img src={props.searchResults[0].artworkUrl100} alt={props.searchResults[0].artistName} />
                    </AlbumArt>
                    <TrackDetails>
                        <h3>Name: {props.searchResults[0].trackName}</h3>
                        <h3>Artist: {props.searchResults[0].artistName}</h3>
                        <h3>Album: {props.searchResults[0].collectionName}</h3>
                    </TrackDetails>
                </TrackHead>
                <APlayer controls loop>
                    <source src={props.searchResults[0].previewUrl} type="audio/wav" />
                </APlayer>
                <AddButton>
                    <button name="0" onClick={storeTrack}>Add To Library</button>
                </AddButton>
            </Track>
            <Track id={props.searchResults[1].id}>
                <TrackHead>
                    <AlbumArt>
                        <img src={props.searchResults[1].artworkUrl100} alt={props.searchResults[0].artistName} />
                    </AlbumArt>
                    <TrackDetails>
                        <h3>Name: {props.searchResults[1].trackName}</h3>
                        <h3>Artist: {props.searchResults[1].artistName}</h3>
                        <h3>Album: {props.searchResults[1].collectionName}</h3>
                    </TrackDetails>
                </TrackHead>
                <APlayer controls loop>
                    <source src={props.searchResults[1].previewUrl} type="audio/wav" />
                </APlayer>
                <AddButton>
                    <button name="1" onClick={storeTrack}>Add To Library</button>
                </AddButton>
            </Track>
            <Track id={props.searchResults[2].id}>
                <TrackHead>
                    <AlbumArt>
                        <img src={props.searchResults[2].artworkUrl100} alt={props.searchResults[0].artistName} />
                    </AlbumArt>
                    <TrackDetails>
                        <h3>Name: {props.searchResults[2].trackName}</h3>
                        <h3>Artist: {props.searchResults[2].artistName}</h3>
                        <h3>Album: {props.searchResults[2].collectionName}</h3>
                    </TrackDetails>
                </TrackHead>
                <APlayer controls loop>
                    <source src={props.searchResults[2].previewUrl} type="audio/wav" />
                </APlayer>
                <AddButton>
                    <button name="2" onClick={storeTrack}>Add To Library</button>
                </AddButton>
            </Track>
            <Track id={props.searchResults[3].id}>
                <TrackHead>
                    <AlbumArt>
                        <img src={props.searchResults[3].artworkUrl100} alt={props.searchResults[0].artistName} />
                    </AlbumArt>
                    <TrackDetails>
                        <h3>Name: {props.searchResults[3].trackName}</h3>
                        <h3>Artist: {props.searchResults[3].artistName}</h3>
                        <h3>Album: {props.searchResults[3].collectionName}</h3>
                    </TrackDetails>
                </TrackHead>
                <APlayer controls loop>
                    <source src={props.searchResults[3].previewUrl} type="audio/wav" />
                </APlayer>
                <AddButton>
                    <button name="3" onClick={storeTrack}>Add To Library</button>
                </AddButton>
            </Track>
            <Track id={props.searchResults[4].id}>
                <TrackHead>
                    <AlbumArt>
                        <img src={props.searchResults[4].artworkUrl100} alt={props.searchResults[0].artistName} />
                    </AlbumArt>
                    <TrackDetails>
                        <h3>Name: {props.searchResults[4].trackName}</h3>
                        <h3>Artist: {props.searchResults[4].artistName}</h3>
                        <h3>Album: {props.searchResults[4].collectionName}</h3>
                    </TrackDetails>
                </TrackHead>
                <APlayer controls loop>
                    <source src={props.searchResults[4].previewUrl} type="audio/wav" />
                </APlayer>
                <AddButton>
                    <button name="4" onClick={storeTrack}>Add To Library</button>
                </AddButton>
            </Track>
        </Wrapper>
    );
};

export default SearchPopout;