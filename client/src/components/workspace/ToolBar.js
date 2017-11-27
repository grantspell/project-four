import React, { Component } from 'react';
import styled from 'styled-components';

// COMPONENTS
import TBMenu from './TBMenu'

// STYLES
const ToolBarWrapper = styled.div`
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: center;

    button {
        background-color: rgba(255, 255, 255, 0);
        border: none;
        text-decoration: none;
    }
`
const ToolBarMenu = styled.div`
    color: black;
`
const VisualLibrary = styled.div`

`

class ToolBar extends Component {
    
    state = {
        toolBarVisible: false,
    }
    
    expandToolbar = (event) => {
        event.preventDefault()
        
        this.setState({ toolBarVisible: true })
        console.log(this.state.toolBarVisible)
    }
    
    render() {

        // if(this.state.toolBarVisible == true) {
        //     return (
        //         <div>THIS IS CLEARLY HERE</div>
        //     )
        // }

        
        return (
            <div>

                <ToolBarWrapper>
                    <button type="submit" value="Expand" onClick={this.expandToolBar}><i class="material-icons">chevron_left</i></button>
                    { this.state.toolBarVisible ? <TBMenu /> : null }
                </ToolBarWrapper>

                <ToolBarMenu>
                    <h3>COLLECTION NAME</h3>
                    <button>VISUALS</button>
                    <button>AUDIO</button>
                </ToolBarMenu>

                <VisualLibrary>
                    {/* make axios call then map art pieces by artist type `visual` then map */}
                        {/* visual_img_url in thumbnail size, onclick adds to collection */}
                </VisualLibrary>
                
            </div>
        );
    }
}

export default ToolBar;