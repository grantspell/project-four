import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styled from 'styled-components';

// STYLES
const ToolBarWrapper = styled.div`

`

class Modal extends Component {
    render() {
        if(this.props.isOpen === false)
            return null
        
        
        return (
            <div>
                hello
            </div>
        );
    }
}

class ToolBar extends Component {
    state = {
        isModalOpen: false
    }

    openModal = () => {
        this.setState({ isModalOpen: true })
    }

    closeModal = () => {
        this.setState({ isModalOpen: false })
    }

    render() {
        return (
            <ToolBarWrapper>

                <button onClick={this.openModal}><i className="material-icons">add_circle_outline</i></button>

                <Modal isOpen={this.state.isModalOpen} onClose={this.closeModal}>
                    <h1>THIS IS OUR TOOLBAR</h1>
                </Modal>

            </ToolBarWrapper>
        );
    }
}

export default ToolBar;