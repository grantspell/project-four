import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

// STYLES
const FormStyle = styled.div`
    display: inline-flex;
    flex-direction: column;
    justify-content: space-around;

    div {
        margin: 10px;

        label {
            color: blue;
            float: letf;
            margin-right: 25px;
        }

        input {
            float: right;
        }

    }

    @media (max-width: 768px) {
        
    }
`
const AllWrapper = styled.div`
    padding: 50px;
    height: 100%;
    font-family: 'Source Code Pro', monospace;
    display: flex;
    flex-direction: column;
    justify-content: space-around;  
    align-items: center;

    h1 {
        letter-spacing: 6px;
    }
`
const BlurbStyle = styled.div`
    background-color: blue;
    width: 50vw;
    height: 35vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
        height: 100%;
        color: white;
        padding: 50px;
        font-size: 85px;
        letter-spacing: 0px;
        display: inline-block;
        text-shadow: 15px 15px 0px yellow, -15px 15px 0px red;
    }
`

class SignUpForm extends Component {

    state = {
        newUser: {
            name: '',
            username: '',
            password: '',
            user_image: ''
        },
        redirectToWorkspace: false
    }

    handleChange = (event) => {
        const attr = event.target.name
        const updateUser = {...this.state.newUser}

        updateUser[attr] = event.target.value
        this.setState({ newUser: updateUser })
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const res = await axios.post(`/api/users`, {
            'user': this.state.newUser
        })

        this.setState({ redirectToWorkspace: true })
    }
    
    render() {

        if (this.state.redirectToWorkspace) {
            return <Redirect to={`/workspace/${this.state.newUser.username}`} />
        }
        
        return (
            <div>
                <BlurbStyle>
                    {/* <p>☺︎</p> */}
                    <p>DILETTANTE</p>
                </BlurbStyle>
            <AllWrapper>
                <h1>Registration</h1>

                <form onSubmit={this.handleSubmit}>
                <FormStyle>

                    <div>
                        <label htmlFor="name">Name: </label>
                        <input
                            onChange={this.handleChange} name="name"
                            type="text" value={this.state.newUser.name}
                        />
                    </div>

                    <div>
                        <label htmlFor="username">Username: </label>
                        <input 
                            onChange={this.handleChange} name="username"
                            type="text" value={this.state.newUser.username}
                        />
                    </div>

                    <div>
                        <label htmlFor="password">Password: </label>
                        <input
                            onChange={this.handleChange} name="password"
                            type="password" value={this.state.newUser.password}
                        />
                    </div>

                    <div>
                        <label htmlFor="user_image">Photo URL: </label>
                        <input
                            onChange={this.handleChange} name="user_image"
                            type="url" value={this.state.newUser.user_image}
                        />
                    </div>

                    <button>Sign Up</button>

                </FormStyle>
                </form>

            </AllWrapper>
            </div>
        );
    }
}

export default SignUpForm;