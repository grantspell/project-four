import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

// STYLES
const ToolBarWrapper = styled.div`

`
const Buttons = styled.div`
    .aButton {
        background-color: rgba(0,0,0,0);
        border: none;
        margin: 5px;
        text-decoration: none;
    }
`
const ExtendedWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

const EToolBar = (props) => {
    return (
        <ExtendedWrapper>
            <button>V</button>
            <button>M</button>
            <button>E</button>
            <button>P</button>
        </ExtendedWrapper>
    )
}

class ToolBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        };
        this.toggleTB = this.toggleTB.bind(this)
    }

    toggleTB = () => {
        const { visible } = this.state
        this.setState({ visible: !visible })
    }
    
    render() {
        const { title, children } = this.props;
        const { visible } = this.state;
        return (
            <ToolBarWrapper>
                
                <Buttons>
                    <button className="aButton" onClick={this.toggleTB}><i class="material-icons">add_circle_outline</i></button>
                </Buttons>
                { visible && <EToolBar /> }
                
            </ToolBarWrapper>
        );
    }
}

export default ToolBar;