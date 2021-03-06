import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import axios from 'axios';
import styled from 'styled-components';

// COMPONENTS
import UpdateUserForm from './UpdateUserForm'

// STYLES
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    justify-content: center;
    align-items: center;
`

class UserAccount extends Component {
    state = {
        user: {
            name: '',
            username: '',
            password: '',
            id: 0,
        },
        redirectToHome: false
    }

    componentWillMount() {
        const { username } = this.props.match.params
        this.getUserData(username)
    }   

    getUserData = async (username) => {
        const res = await axios.get(`/api/users/${username}`)
        this.setState({ user: res.data })
    }
    
    deleteUser = async (userId) => {
        const id = userId
        console.log(userId)
        const res = await axios.delete(`/api/users/${userId}`)
        this.setState({
            user:res.data,
            redirectToHome:true,
        })       
    }

    // Create a Patch for User
    handleChange = (event, userId) => {
        const attr = event.target.name
        const clonedUser = {...this.state.user}
        clonedUser[attr] = event.target.value
        this.setState({ user: clonedUser })
    }

    // Trigger Patch when leaving an input field
    updateUser = async (userId) => {
        const id = userId
        console.log(id)
        const clonedUser = {...this.state.user}

        const res = await axios.patch(`/api/users/${id}`, {
            user: clonedUser
        })
        this.setState({ user: res.data })
    }

    render() {

        if (this.state.redirectToHome) {
            return <Redirect to={`/account`} />
        }
        
        return (
            <Wrapper>
                <h1>{this.state.user.name}'s Account</h1>
                <UpdateUserForm
                    user={this.state.user.name}
                    userName={this.state.user.username}
                    password={this.state.user.password}
                    userId={this.state.user.id}
                    handleChange={this.handleChange}
                    updateUser={this.updateUser}
                    deleteUser={this.deleteUser}
                />
            </Wrapper>
        );
    }
}

export default UserAccount;