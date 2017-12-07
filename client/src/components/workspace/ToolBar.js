import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
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
    height: 20vh;
`
const VisualWrapper = styled.div`
    display: flex;
`

const EToolBar = (props) => {

    const displayVisual = () => {
        props.displayVisual();
    }
    
    return (
        <ExtendedWrapper>
            <button onClick={displayVisual}>V</button>
            <button>M</button>
            <button>E</button>
            <button>P</button>
        </ExtendedWrapper>
    )
};

const Visuals = (props) => {
    return (
        <VisualWrapper>
            {props.visuals.map(visual => {
                return(
                    <img src={visual.visual_url} />
                )
            })}
        </VisualWrapper>
    )
}

class ToolBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            visualVisible: false,
            visuals: [],
        };
        this.toggleTB = this.toggleTB.bind(this)
        this.displayVisual = this.displayVisual.bind(this)
    }

    toggleTB = () => {
        const { visible } = this.state
        this.setState({ visible: !visible })
    }

    displayVisual = async () => {
        const { visualVisible } = this.state

        const res = await axios.get(`/api/v`)
        this.setState({ 
            visuals: res.data, 
            visualVisible: !visualVisible 
        })
    }
    
    render() {
        const { visible } = this.state;
        const { visualVisible } = this.state;
        return (
            <ToolBarWrapper>
                
                <Buttons>
                    <button className="aButton" onClick={this.toggleTB}><i className="material-icons">add_circle_outline</i></button>
                </Buttons>
                { visible && <EToolBar
                    displayVisual={this.displayVisual}
                /> }
                { visualVisible && <Visuals
                    visuals={this.state.visuals}
                /> }
                
            </ToolBarWrapper>
        );
    }
}

export default ToolBar;