import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CommitList from './CommitList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Tuxeditors Site</h2>
        </div>
        <CommitList />
      </div>
    );
  }
}

export default App;
