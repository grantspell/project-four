import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

// COMPONENTS
import SideBar from './SideBar.js'
import Collection from './Collection.js'

// STYLES
const WorkspaceWrapper = styled.div`
    display: flex;
    flex-direction: column;
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
        const username = this.props.match.params.username

        console.log(username)

        const res = await axios.get(`/api/users/${username}`)
        await this.setState({ user: res.data })

        this.getUserCollections()
    }

    getUserCollections = async () => {
        const userId = this.state.user.id

        console.log(userId)

        const res = await axios.get(`/api/collections/${userId}`)
        await this.setState({ userCollections: res.data })

        console.log(res)
    }

    render() {
        return (
            <WorkspaceWrapper>
                
                <SideBar 
                user={this.state.user.name}
                userName={this.state.user.username}
                userImage={this.state.user.user_image}
                userCollections={this.state.userCollections} 
                />
                <Collection />
            </WorkspaceWrapper>
        );
    }
}

export default WorkspaceView;