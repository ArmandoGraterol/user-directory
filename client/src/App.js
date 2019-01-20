import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import UserDirectory from './components/UserDirectory';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/people" component={UserDirectory} />
        </Switch>
      </div>
    );
  }
}

export default App;
