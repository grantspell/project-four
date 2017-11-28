import React, { Component } from 'react';
import styled from 'styled-components';

// COMPONENTS
import SignUpForm from './SignUpForm'

// STYLES
const FormWrapper = styled.div`
    @media (max-width: 768px) {
        height: 40vh;
        width: 90vw;
        margin: 5px;
    }
`

class SignUp extends Component {
    render() {
        return (
            <FormWrapper>
                <SignUpForm />
            </FormWrapper>
        );
    }
}

export default SignUp;