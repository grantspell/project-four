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
    height: 60vh;
    width: 60vw;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 100%;
    border: 10px double black;
`
const Title = styled.div`
    h1 {
        color: white;
        font-family: 'Barlow Semi Condensed', sans-serif;
        font-size: 50px;
        text-shadow: 3px 3px 0px black;
    }
`
const Buttons = styled.div`
    display: flex;
    justify-content: space-around;
    width: 30%;
    
`

class HomeComp extends Component {
    render() {
        return (
            <Wrapper>
                <Bubble>
                    <Title>
                        <h1>DILETTANTE</h1>
                    </Title>
                    <Buttons>

                        <button><Link to="/account">Log In</Link></button>

                        <button><Link to="/account">Sign Up</Link></button>
                        
                    </Buttons>
                </Bubble>
            </Wrapper>
        );
    }
}

export default HomeComp;