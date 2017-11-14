import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

// COMPONENTS
import HomeView from './components/home/HomeView.js'
import AccountView from './components/account/AccountView.js'
import Workspace from './components/workspace/Workspace.js'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route path="/account" component={AccountView} />
          <Route path="/workspace" component={Workspace} />
        </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
