import React from 'react';
import styled from 'styled-components';

// STYLES
const CollectionListStyle = styled.div`

`

const CollectionList = (props) => {

    const updateWorkingCollection = () => {
        props.updateWorkingCollection(props.id)
    }
    
    return (
        <CollectionListStyle>
            <button onClick={updateWorkingCollection}>{props.title}</button>
        </CollectionListStyle>
    );
};

export default CollectionList;