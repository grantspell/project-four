import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// STYLES
const SideBarStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 25vw;
    height: 100vh;
    background-color: blue;
    color: white;
    border-right: 5px solid rgba(0,0,0,.3);
`
const UserInfo = styled.div`
    background-color: black;
    margin-top: 50px;
    border: 15px double pink;
    padding: 35px;
    text-align: center;

    img {
        height: 250px;
        margin: 25px 0px 0px 0px;
        border-radius: 100%;
        box-shadow: 5px 5px 0px yellow, -5px -5px 0px red;
    }
`
const ListsStyle = styled.div`

`
const ButtonStyle = styled.div`
    button {
        margin: 5px;
    }

`

// class SideBar extends Component {
//     render() {
//         return (
//             <SideBarStyle>
//                 <UserInfo>
//                     <img src="https://www.arabiaweddings.com/sites/default/files/news/2014/06/anna.jpg" />
//                     <h1>Anna Wintour</h1>
//                     <p>@VogueWintour</p>
//                 </UserInfo>
//                 <ListsStyle>
//                     <h1>COLLECTIONS</h1>
//                     <ul>
//                         <li>ETHEREAL</li>
//                         <li>SUNDOWNING AGAIN</li>
//                         <li>REFILL</li>
//                     </ul>
//                     <h1>MOODS</h1>
//                     <ul>
//                         <li>ALMOST HAPPY</li>
//                         <li>ANXIOUS</li>
//                         <li>LUMINOUS</li>
//                     </ul>
//                 </ListsStyle>
//                 <ButtonStyle>
//                     <button>Visual Artists</button>
//                     <button>Audio Artists</button>
//                 </ButtonStyle>
//             </SideBarStyle>
//         );
//     }
// }

// export default SideBar;


const SideBar = (props) => {

    const setWorkingCollection = (event) => {
        props.setWorkingCollection(event, props.collection_id)
    }
    
    return (
        <SideBarStyle>
            <UserInfo>
                <img src={props.userImage} />
                <h1>{props.user}</h1>
                <p>@{props.userName}</p>
            </UserInfo>
            <ListsStyle>
                <h1>COLLECTIONS</h1>
                {props.userCollections.map(collection => {
                    return (
                        <div key={collection.id} _id={collection.id}>
                            <li><button onClick={this.setWorkingCollection}>
                                {collection.title}
                            </button></li>
                        </div>
                    )})}
                    {/* {props.moodKeywords.map(keyword => {
                    <h1>MOOD</h1>
                        return(
                        <div key={keyword.id} _id={keyword.id}>
                            <li>{keyword}</li>
                        </div>
                        )
                    })} */}
            </ListsStyle>
                 <ButtonStyle>
                     <button><Link to="/library">Artists Library</Link></button>
                     <button><Link to={`/account/${props.userName}`}>Account</Link></button>
                 </ButtonStyle>
        </SideBarStyle>
    );
};

export default SideBar;