import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

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
            <div>
                <h1>Existing Users</h1>
                {this.state.users.map(user => {
                    return (
                    <div key={user.username}>
                        <h3>Name: <Link to={`/workspace/${user.username}`} >{user.name}</Link></h3>
                        <p>Username: {user.username}</p>
                    </div>
                    )}
                )}
            </div>
        );
    }
}

export default LogInForm;