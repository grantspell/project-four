import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

// STYLES
const CollectionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 100vh;
    width: 75vw;
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

`

const Collection = (props) => {
    return (
        <CollectionWrapper>
            <VisualContent>
                <h1>{props.collectionName}</h1>
                <img src={props.collectionV} />
            </VisualContent>

            <AudioContent>
                <audio controls autoPlay loop
                    src={props.collectionA}
                />
            </AudioContent>

            <EntryContent>
                <p>{props.collectionE}</p>
            </EntryContent>
        </CollectionWrapper>
    );
};

export default Collection;