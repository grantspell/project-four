import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

// COMPONENTS
import ArtistsIndex from './ArtistsIndex'

class LibraryView extends Component {
    render() {
        return (
            <div>
                <ArtistsIndex />
            </div>
        );
    }
}

export default LibraryView;