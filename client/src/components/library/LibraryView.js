import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';

// COMPONENTS
import ArtistsIndex from './ArtistsIndex'
import Nav from './LibraryNav'

// STYLES
const Navigation = styled.div`
    display: flex;
    width: 100vw;
    justify-content: flex-end;
`

class LibraryView extends Component {
    render() {
        return (
            <div>
                <Nav />
                <ArtistsIndex />
            </div>
        );
    }
}

export default LibraryView;