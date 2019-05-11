import React, { Component } from 'react';
import './App.css';
import Side from './Side.js';
import Right from './Right.js';

class App extends Component {

  

  render() {
    return (
      <div className="App">
        <Side />
        <Right />
      </div>
    );
  }
}

export default App;
