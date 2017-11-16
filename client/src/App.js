import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

// COMPONENTS
import HomeView from './components/home/HomeView.js'
import AccountView from './components/account/AccountView.js'
import UserAccount from './components/account/UserAccount.js'
import WorkspaceView from './components/workspace/WorkspaceView.js'
import LibraryView from './components/library/LibraryView.js'
import Artist from './components/library/Artist.js'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route exact path="/account" component={AccountView} />
          <Route exact path="/account/:username" component={UserAccount} />
          <Route path="/workspace/:username" component={WorkspaceView} />
          <Route exact path="/library" component={LibraryView} />
          <Route exact path="/library/:artist_id" component={Artist} />
        </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
