import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// STYLES
const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`
const Bubble = styled.div`
    background-color: pink;
    height: 600px;
    width: 600px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 100%;
    border: 10px double black;
`
const Title = styled.div`
    text-align: center;
    width: 100%;
    margin-top: 75px;

    h1 {
        color: white;
        font-family: 'Barlow Semi Condensed', sans-serif;
        font-size: 50px;
        text-shadow: 3px 3px 0px black;
        margin-bottom: -9px;
        letter-spacing: 10px;
    }
    p {
        width: 100%;
        color: black;
        letter-spacing: 9.5px;
        padding: 3px;
    }
`
const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 30%;

    .aButton {
        background-color: rgba(255, 255, 255, .0);
        border: none;
        padding: 0px;
        text-align: center;
        text-decoration: none;
    }
    .material-icons {
        color: white;
        font-size: 48px;
    }
    p {
        color: black;
        letter-spacing: 5px;
        background-color: white;

    }
`

class HomeComp extends Component {
    render() {
        return (
            <Wrapper>
                <Bubble>
                    <Title>
                        <h1>DILETTANTE</h1>
                        <p>EXPLORING ART FUSION</p>
                    </Title>
                    <Buttons>

                        <button className="aButton"><Link to="/account" alt="Account Login or Signup Button"><i class="material-icons">account_circle</i></Link></button>
                        
                    </Buttons>
                </Bubble>
            </Wrapper>
        );
    }
}

export default HomeComp;