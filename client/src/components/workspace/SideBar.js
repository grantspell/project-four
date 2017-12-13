import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// COMPONENTS
import CollectionList from './CollectionList'

// STYLES
const SideBarStyle = styled.div`
    font-family: 'Barlow Semi Condensed', sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 100vh;
    background-color: #EEEEEE;
    color: black;
    box-shadow: 1px 0px 5px black;
`
const UserInfo = styled.div`
    background-color: white;
    border: 7px double black;
    padding: 20px;
    text-align: center;

    img {
        height: 15vw;
        background-color: white;
        border-radius: 100%;
        box-shadow: 6px 6px 0px black, -6px -6px 0px white;
    }
`
const UserText = styled.div`
    color: blue;
    margin-top: 15px;
    padding: 1px;
    text-align: center;

    h1 {
        letter-spacing: 5px;
    }
`
const ListsStyle = styled.div`
    width: 80%;
    text-align: center;

    h1 {
        font-family: 'Barlow Semi Condensed', sans-serif;
        letter-spacing: 5px;
        text-decoration: underline;
        margin: 0 auto;
    }
`
const ButtonStyle = styled.div`
    width: 100%;
    text-align: center;

    button {
        margin: 5px;
    }
    .aLink {
        text-decoration: none;
    }
`

const SideBar = (props) => {

    const createCollection = () => {
        props.createCollection()
    }
    
    return (
        <SideBarStyle>
            
            <UserInfo>
                <img src={props.userImage} />
                <UserText>
                <h1>{props.user}</h1>
                <p>@{props.userName}</p>
                </UserText>
            </UserInfo>

            <ListsStyle>
                <h1>COLLECTIONS</h1>
                <button onClick={createCollection}>Create Collection</button>
                {props.userCollections.map((collection) => {
                    return (
                        <CollectionList key={collection._id} _id={collection._id} id={collection.id}
                            title={collection.title}
                            updateWorkingCollection={props.updateWorkingCollection}
                        />
                    )})}
            </ListsStyle>

                 <ButtonStyle>
                     <button><Link to="/library" className="aLink">Library</Link></button>
                     <button><Link to={`/account/${props.userName}`} className="aLink">Account</Link></button>
                 </ButtonStyle>

        </SideBarStyle>
    );
};

export default SideBar;