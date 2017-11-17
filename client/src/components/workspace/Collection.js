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

`
const AudioContent = styled.div`

`
const EntryContent = styled.div`

`

const Collection = (props) => {
    return (
        <CollectionWrapper>
            <VisualContent>
                <img src={props.workingCollection} />
                <h1>{props.collectionName}</h1>
                <img src={props.collectionV} />
            </VisualContent>

            <AudioContent>
                <audio controls autoPlay
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