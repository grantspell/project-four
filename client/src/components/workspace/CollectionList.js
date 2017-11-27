import React from 'react';
import styled from 'styled-components';

// STYLES
const Wrapper = styled.div`
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`
const CollectionListStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 65%;
    
    button {
        margin: 1px;
        // background-color: yellow;
        // color: black;
    }
`
const CollectionNav = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 65%;

    button {
        margin: 1px;
        width: 49%;        
    }
`

const CollectionList = (props) => {

    const updateWorkingCollection = () => {
        props.updateWorkingCollection(props.id)
    }
    
    return (
        <Wrapper>
        <CollectionListStyle>
            <button onClick={updateWorkingCollection}>{props.title}</button>
        </CollectionListStyle>
        <CollectionNav>
            <button>✎</button><button>✂︎</button>
        </CollectionNav>
        </Wrapper>
    );
};

export default CollectionList;