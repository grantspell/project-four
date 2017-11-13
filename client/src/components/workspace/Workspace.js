import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

// COMPONENTS
import SideBar from './SideBar.js'
import WorkingCollection from './WorkingCollection.js'

// STYLES
const WorkspaceWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
`

class Workspace extends Component {

    state = {
        users: [],
    }

    componentWillMount() {
        this.getUserData()
    }

    getUserData = async () => {
        const res = await axios.get(`/api/users/`)
        this.setState({ users: res.data })
    }

    render() {
        return (
            <WorkspaceWrapper>

                {this.state.users.map(user => (
                    <h1>Name: {user.name}</h1>
                ))}
                
                {/* <SideBar />
                <WorkingCollection /> */}
            </WorkspaceWrapper>
        );
    }
}

export default Workspace;