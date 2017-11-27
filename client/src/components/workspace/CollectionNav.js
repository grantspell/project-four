import React, { Component } from 'react';
import styled from 'styled-components';

// STYLES
const NavWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: center;
`

class CollectionNav extends Component {

    state = {

    }

    componentWillMount() {
        
    }

    openMenu = async (event) => {
        
    }
    
    render() {
        return (
            <NavWrapper>
                <button>+</button>
                <button>-</button>
            </NavWrapper>
        );
    }
}

export default CollectionNav;