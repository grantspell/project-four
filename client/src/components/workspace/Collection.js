import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

// STYLES
const CollectionWrapper = styled.div`
    display: flex;
    flex-direction: ;
    height: 100vh;
    width: 75vw;
`
const VisualContent = styled.div`

`
const AudioContent = styled.div`

`
const EntryContent = styled.div`

`

// class Collection extends Component {

//     state = {
//         user: {},
//         workingCollection: {}
//     }

//     componentWillMount() {
//         this.getCollectionData
//     }

//     getCollectionData = async (props) => {
//         const collectionId = this.props.workingCollection
//         const userId = this.props.userId

//         const res = await axios.get(`/api/collection/${userId}/${collectionId}`)
//         this.setState({ workingCollection: res.data })
//         console.log(this.state)
//     }

//     render() {
//         return (
//             <CollectionWrapper>
//                 <h1>hello</h1>

// <VisualContent>
//     <img src={this.workingCollection} />
// </VisualContent>

// <AudioContent>
// </AudioContent>

// <EntryContent>
// </EntryContent>

//             </CollectionWrapper>
//         );
//     }
// }


const Collection = (props) => {
    return (
        <div>
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
        </div>
    );
};

export default Collection;