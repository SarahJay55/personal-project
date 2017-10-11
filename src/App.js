import React, { Component } from 'react';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi There!</h1>
        <a href='http://localhost:3005/auth'><button>Log in</button></a>
      </div>
    );
  }
}

export default App;
