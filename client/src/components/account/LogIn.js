import React, { Component } from 'react';
import styled from 'styled-components';

// COMPONENTS
import LogInForm from './LogInForm'

// STYLES
const FormWrapper = styled.div`
    padding: 50px;
    background-color: red;
    height: 100vh;
    width: 50vw;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    @media (max-width: 768px) {
        height: 40vh;
        width: 90vw;
        margin: 5px;
    }
`

class LogIn extends Component {
    render() {
        return (
            <FormWrapper>
                <LogInForm />
            </FormWrapper>
        );
    }
}

export default LogIn;