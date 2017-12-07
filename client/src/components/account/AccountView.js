import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// COMPONENTS
import LogIn from './LogIn'
import SignUp from './SignUp'

// STYLES
const AccountWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100vh;
    width: 100vw;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }
`

class AccountView extends Component {
    render() {
        return (
            <AccountWrapper>
                <LogIn />
                <SignUp />
            </AccountWrapper>
        );
    }
}

export default AccountView;