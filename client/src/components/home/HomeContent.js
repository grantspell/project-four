import React, { Component } from 'react';
import styled from 'styled-components';

// STYLES
const Wrapper = styled.div`
    background-image: url(https://i.imgur.com/d9vRi9b.png);
    width: 100vw;
    height: 100vh;
    justify-content: space-around;
    text-align: center;

`
const Greeting = styled.div`

h1 {
    color: white;
}
p {
    color: white;
}
`

class HomeContent extends Component {
    render() {
        return (
            <Wrapper>

            </Wrapper>
        );
    }
}

export default HomeContent;