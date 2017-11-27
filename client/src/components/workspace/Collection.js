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
`
const ArtWrapper = styled.div`

`
const VisualContent = styled.div`
    img {
        max-width: 35vw;
        max-height: 60vh;
        border: 10px double pink;
    }
`
const AudioContent = styled.div`

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
                    <audio controls autoPlay loop
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