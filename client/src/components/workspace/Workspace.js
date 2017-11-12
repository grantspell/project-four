import React, { Component } from 'react';
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
    render() {
        return (
            <WorkspaceWrapper>
                <SideBar />
                <WorkingCollection />
            </WorkspaceWrapper>
        );
    }
}

export default Workspace;