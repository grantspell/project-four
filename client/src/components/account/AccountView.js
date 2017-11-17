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
    align-content: center;
    margin-top: 50px;
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