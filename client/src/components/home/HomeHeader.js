import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// STYLES
const HeaderStyles = styled.div`
    display: flex;
    align-items: center;
    background-color: rgba(255, 0, 0, );
`
const Logo = styled.div`
    flex: 1;
    margin-left: 10px;
    color: #0041D8;
    text-shadow: -1px -1px 0px white;
    font-family: 'Barlow Semi Condensed', sans-serif;
`
const ButtonOne = styled.div`
    margin-right: 10px;
`
const ButtonTwo = styled.div`
    margin-right: 10px;
`

class HomeHeader extends Component {
    render() {
        return (
            <HeaderStyles>
                
                <Logo>
                    <h1>DILETTANTE</h1>
                </Logo>
                
                <ButtonOne>
                    <button><Link to="/account">Log In</Link></button>
                </ButtonOne>
                
                <ButtonTwo>
                    <button><Link to="/account">Sign Up</Link></button>
                </ButtonTwo>
                
            </HeaderStyles>
        );
    }
}

export default HomeHeader;