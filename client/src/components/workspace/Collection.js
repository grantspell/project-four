import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

// STYLES
const CollectionWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 100vh;
    font-family: 'Barlow Semi Condensed', sans-serif;
`
const ArtWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`
const VisualContent = styled.div`
    img {
        max-width: 35vw;
        max-height: 60vh;
        border: 10px double pink;
    }
`
const AudioContent = styled.div`
    .player {

    }
`
const EntryContent = styled.div`
    p {
        word-wrap: break-word;
    }
`

const Collection = (props) => {
    return (
        <CollectionWrapper>
            <ArtWrapper>
                <h1>{props.collectionName}</h1>
                <VisualContent>
                    <img src={props.collectionV} />
                </VisualContent>

                <AudioContent>
                    <audio className="player" controls autoPlay loop preload
                        src={props.collectionA}
                    />
                </AudioContent>
            </ArtWrapper>

            <EntryContent>
                <p>{props.collectionE}</p>
            </EntryContent>
        </CollectionWrapper>
    );
};

export default Collection;