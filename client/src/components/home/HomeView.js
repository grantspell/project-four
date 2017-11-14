import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

// COMPONENTS
import HomeHeader from './HomeHeader.js'
import HomeContent from './HomeContent.js'

// STYLES
const HomeWrapper = styled.div`

`

class HomeView extends Component {
    render() {
        return (
            <HomeWrapper>
                <HomeHeader />
                <HomeContent />
            </HomeWrapper>
        );
    }
}

export default HomeView;