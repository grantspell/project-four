// import React, { Component } from 'react';
// import styled from 'styled-components';

// // STYLES
// const ToolBarWrapper = styled.div`
//     height: 50vh;
//     display: flex;
//     flex-direction: column;
//     justify-content: flex-start;
//     align-content: center;
// `
// const ToolBarMenu = styled.div`
//     color: black;
// `

// class ToolBar extends Component {
    
//     state = {
//         toolBarVisible: false,
//     }
    
//     expandToolbar = () => {
//         this.setState({ toolBarVisible: true })
//         console.log(this.state.toolBarVisible)
//     }
    
//     render() {

//         // if(this.state.toolBarVisible == true) {
//         //     return (
//         //         <div>THIS IS CLEARLY HERE</div>
//         //     )
//         // }
        
//         return (
//             <div>

//                 <ToolBarWrapper>
//                     <button onClick={this.expandToolBar}>+</button>
//                     <button>-</button>
//                 </ToolBarWrapper>

//                 <ToolBarMenu>
//                     <h3>COLLECTION NAME</h3>
//                     <button>VISUALS</button>
//                     <button>AUDIO</button>
//                 </ToolBarMenu>

//                 <VisualLibrary>
//                     {/* make axios call then map art pieces by artist type `visual` then map */}
//                         {/* visual_img_url in thumbnail size, onclick adds to collection */}
//                 </VisualLibrary>
                
//             </div>
//         );
//     }
// }

// export default ToolBar;