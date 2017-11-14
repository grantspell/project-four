import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

// COMPONENTS
import SideBar from './SideBar.js'
import Collection from './Collection.js'

// STYLES
const WorkspaceWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
`

class WorkspaceView extends Component {

    state = {
        user: {
            name: '',
            username: '',
            user_image: ''
        },
        userCollections: []
    }

    componentWillMount() {
        this.getUserData()
    }

    getUserData = async () => {
        const username = this.props.match.params


        const res = await axios.get(`/api/users/${username}`)
        this.setState({ users: res.data })
    }

    render() {
        return (
            <WorkspaceWrapper>

                {this.state.user.name}
                
                {/* <SideBar />
                <Collection /> */}
            </WorkspaceWrapper>
        );
    }
}

export default WorkspaceView;