import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

// COMPONENTS
import SideBar from './SideBar.js'
import Collection from './Collection.js'
import ToolBar from './ToolBar.js'

// STYLES
const WorkspaceWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }
`
const SideBarStyle = styled.div`
    width: 25vw;
    height: 100vh;

    @media (max-width: 768px) {
        width: 100vw;
        height: 100vh;
    }
`
const CollectionStyle = styled.div`
    width: 75vw;
    height: 100vh;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 100vw;
    }
`
const ToolBarStyle = styled.div`
    background-color: white;
    height: 100vh;

    @media (max-width: 768px) {
        
    }
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

        const res = await axios.get(`/api/users/${username}`)
        await this.setState({ user: res.data })

        this.getUserCollections()
    }

    getUserCollections = async () => {
        const userId = this.state.user.id
        console.log(userId)

        const res = await axios.get(`/api/collections/${userId}`)
        await this.setState({ userCollections: res.data })

        this.setWorkingCollection()
    }

    createCollection = async () => {
        const userId = this.state.user.id

        const res = await axios.post(`/api/collections/${userId}`)
        const { userCollections } = this.state
        userCollections << res.data

        this.setState({ userCollections: userCollections })

        this.getUserCollections()
    }

    setWorkingCollection = async () => {
        await this.setState({ workingCollection: this.state.userCollections[0] })

        this.getVisualAndAudio()
    }

    updateWorkingCollection = async (collectionId) => {
        const userId = this.state.user.id
        const id = collectionId

        const res = await axios.get(`/api/collections/${userId}/${id}`)
        await this.setState({ workingCollection: res.data[0] })

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
                        createCollection={this.createCollection}
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

                <ToolBarStyle>
                        <ToolBar />
                </ToolBarStyle>

            </WorkspaceWrapper>
        );
    }
}

export default WorkspaceView;