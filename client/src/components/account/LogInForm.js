import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

// STYLES
const FormWrapper = styled.div`
    color: white;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    font-family: 'Source Code Pro', monospace;    

    `
const DisplayWords = styled.div`
    h1 {
        font-size: 25px;
        line-height: 1;
    }
`
const UserList = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-end;
    margin-top: 15px;
    width: 60%;
    line-height: 1;

    .NameDisplay {
        text-decoration: none;
        border: 3px double yellow;
        border-style: dotted solid solid double;
        padding: 3px;
        color: blue;
    }
    .NameDisplay:hover {
        color: white;
        border-style: solid dotted double solid;        
    }
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
                <DisplayWords>
                    <h1 className="one">Existing Users</h1>
                    <h1 className="two">Existing Users</h1>
                    <h1 className="three">Existing Users</h1>
                    <h1 className="four">Existing Users</h1>
                    <h1 className="five">Existing Users</h1>
                    <h1 className="six">Existing Users</h1>
                    <h1 className="seven">Existing Users</h1>
                    </DisplayWords>
                    <UserList>
                {this.state.users.map(user => {
                    return (
                    <div key={user.username}>
                        <h3>@ <Link className="NameDisplay" to={`/workspace/${user.username}`} >{user.name}</Link></h3>
                    </div>
                    )}
                )}
                </UserList>
            </FormWrapper>
        );
    }
}

export default LogInForm;