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
    background-color: white;
    height: 600px;
    width: 600px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border: 10px double black;

    @media (max-width: 768px) {
        height: 300px;
        width: 300px;
    }
`
const Title = styled.div`
    text-align: center;
    width: 100%;
    margin-top: 75px;

    h1 {
        color: white;
        font-family: 'Source Code Pro', monospace;    
        font-size: 50px;
        text-shadow: -3px 3px 0px black;
        margin: -9px 0px -9px 0px;
        letter-spacing: 10px;
        background-color: yellow;
    }
    p {
        width: 100%;
        color: black;
        letter-spacing: 9.5px;
        padding: 3px;
    }

    @media (max-width: 768px) {
        h1 {
            font-size: 30px;
            margin-bottom: -4px;
        }
        p {
            font-size: 9px;
            letter-spacing: 5.5px;
        }
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
        color: black;
        font-size: 48px;
    }
    p {
        color: black;
        letter-spacing: 5px;
        background-color: white;
    }
`
const Start = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 10px;
    
    p {
        line-height: .1;
        text-shadow: -2px 2px 0px yellow;
    }
    .arrow {
        color: red;
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
                        <Start>
                        <p>GET STARTED</p>
                        <p className="arrow">⇩</p>
                        </Start>

                        <button className="aButton"><Link to="/account" alt="Account Login or Signup Button"><i class="material-icons">account_circle</i></Link></button>
                        
                    </Buttons>
                </Bubble>
            </Wrapper>
        );
    }
}

export default HomeComp;