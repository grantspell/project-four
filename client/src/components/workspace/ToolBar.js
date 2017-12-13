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
    height: 70vh;

    button {
        transform: rotate(90deg);
    }
`
const VisualWrapper = styled.div`
    display: flex;
    flex-direction: column;

    .visualLibrary {
        max-height: 100px;
    }
`

const EToolBar = (props) => {

    const displayVisual = () => {
        props.displayVisual();
    }
    
    return (
        <ExtendedWrapper>
            <button onClick={displayVisual}>VISUAL</button>
            <button>MUSIC</button>
            <button>ENTRY</button>
            <button>PUBLISH</button>
        </ExtendedWrapper>
    )
};

const Visuals = (props) => {

    const updateVisual = () => {
        props.updateVisual();
    }
    
    return (
        <VisualWrapper>
            {props.visuals.map(visual => {
                return(
                    <img onClick={updateVisual} className="visualLibrary" src={visual.visual_url} />
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

    updateVisual = async () => {
        
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
                    updateVisual={this.updateVisual}
                /> }
                
            </ToolBarWrapper>
        );
    }
}

export default ToolBar;