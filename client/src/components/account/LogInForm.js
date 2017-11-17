import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

// STYLES
const FormWrapper = styled.div`
    border: 10px double pink;
    padding: 50px;
`

class LogInForm extends Component {

    state = {
        users: []
    }

    componentWillMount() {
        this.getUsers()
    }

    getUsers = async () => {

        const res = await axios.get('/api/users')
        this.setState({ users: res.data })

    }
    
    render() {
        return (
            <FormWrapper>
                <h1>Existing Users</h1>
                {this.state.users.map(user => {
                    return (
                    <div key={user.username}>
                        <h3>Name: <Link to={`/workspace/${user.username}`} >{user.name}</Link></h3>
                        <p>Username: {user.username}</p>
                    </div>
                    )}
                )}
            </FormWrapper>
        );
    }
}

export default LogInForm;