import React, { Component } from 'react';
import styled from 'styled-components';

// COMPONENTS
import SignUpForm from './SignUpForm'

// STYLES
const FormWrapper = styled.div`
background-color: #fff;
height: 100vh;
width: 50vw;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: flex-start;

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