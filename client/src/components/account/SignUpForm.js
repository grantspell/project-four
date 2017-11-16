import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

//STYLES
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
`

class SignUpForm extends Component {

    state = {
        newUser: {
            name: '',
            username: '',
            password: ''
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
                <h1>SignUp Form</h1>

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

                    <button>Sign Up</button>

                </FormStyle>
                </form>

            </div>
        );
    }
}

export default SignUpForm;