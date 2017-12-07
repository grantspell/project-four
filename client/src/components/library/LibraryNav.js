import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// STYLES
const Navigation = styled.div`
display: flex;
width: 100vw;
justify-content: flex-end;
`

class LibraryNav extends Component {
    render() {
        return (
            <Navigation>
                    <button><Link to="/account"><i class="material-icons">keyboard_backspace</i></Link></button>
                    <button><i class="material-icons">add_circle_outline</i></button>
            </Navigation>
        );
    }
}

export default LibraryNav;