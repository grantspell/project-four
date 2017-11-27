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
`
const ListsStyle = styled.div`
h1 {
    font-family: 'Barlow Semi Condensed', sans-serif;
}

`
const ButtonStyle = styled.div`
    button {
        margin: 5px;
    }
`

const SideBar = (props) => {
    
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
                {props.userCollections.map((collection) => {
                    return (
                        <CollectionList key={collection._id} _id={collection._id} id={collection.id}
                            title={collection.title}
                            updateWorkingCollection={props.updateWorkingCollection}
                        />
                    )})}

            </ListsStyle>
                 <ButtonStyle>
                     <button><Link to="/library">Artists Library</Link></button>
                     <button><Link to={`/account/${props.userName}`}>Account</Link></button>
                 </ButtonStyle>
        </SideBarStyle>
    );
};

export default SideBar;