import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

// COMPONENTS
import SideBar from './SideBar.js'
import Collection from './Collection.js'

// STYLES
const WorkspaceWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`
const SideBarStyle = styled.div`
    width: 25vw;
    height: 100vh;
`
const CollectionStyle = styled.div`
    width: 75vw;
    height: 100vh;
`

class WorkspaceView extends Component {

    state = {
        user: {
            name: '',
            username: '',
            user_image: ''
        },
        userCollections: [],
        workingCollection: {},
        visuals: [],
        audio: [],
        entries: []
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
        if (this.res = !null) {
            await this.setState({ userCollections: res.data })
        } else {
            this.newCollection()
        }
        console.log(res)

        this.setWorkingCollection()
    }

    setWorkingCollection = async () => {
        await this.setState({ workingCollection: this.state.userCollections[0] })
        console.log(this.state.workingCollection)

        this.getVisualAndAudio()
    }

    updateWorkingCollection = async (collectionId) => {
        const userId = this.state.user.id
        console.log(userId)
        const id = collectionId
        console.log(id)

        const res = await axios.get(`/api/collections/${userId}/${id}`)
        await this.setState({ workingCollection: res.data[0] })

        console.log(res)

        this.getVisualAndAudio();
    }

    getVisualAndAudio = async () => {
        const collectionId = this.state.workingCollection.id

        const visual = await axios.get(`/api/content/${collectionId}/v`)
        this.setState({ visuals: visual.data})

        const audio = await axios.get(`/api/content/${collectionId}/a`)
        this.setState({ audio: audio.data })

        const entry = await axios.get(`/api/content/${collectionId}/e`)
        this.setState({ entries: entry.data })

        console.log(this.state)
    }

    render() {
        return (
            <WorkspaceWrapper>
                
                <SideBarStyle>
                    <SideBar 
                        user={this.state.user.name}
                        userName={this.state.user.username}
                        userImage={this.state.user.user_image}
                        userCollections={this.state.userCollections}
                        updateWorkingCollection={this.updateWorkingCollection}
                    />
                </SideBarStyle>

                <CollectionStyle>
                    <Collection
                        user={this.state.user.name}
                        userId={this.state.user.id}
                        userName={this.state.user.username}
                        collectionId={this.state.workingCollection.id}
                        collectionName={this.state.workingCollection.title}
                        collectionV={this.state.visuals.map(visual => {
                            return visual.visual_url
                        })}
                        collectionA={this.state.audio.map(audio => {
                            return audio.previewUrl
                        })}
                        collectionE={this.state.entries.map(entry => {
                            return entry.content
                        })}
                    />
                </CollectionStyle>

            </WorkspaceWrapper>
        );
    }
}

export default WorkspaceView;