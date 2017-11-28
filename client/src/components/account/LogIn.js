import React, { Component } from 'react';
import styled from 'styled-components';

// COMPONENTS
import LogInForm from './LogInForm'

// STYLES
const FormWrapper = styled.div`
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