import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

// COMPONENTS
import Workspace from './components/workspace/Workspace.js'

class App extends Component {
  render() {
    return (
      <div>
          <Workspace />
      </div>
    );
  }
}

export default App;
