import React, { Component } from 'react';
import SearchField from "react-search-field";
import logo from './logo.svg';
import './App.css';
import Movie from './Movie.js';
import Side from './Side.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Side />
        <Movie />
      </div>
    );
  }
}

export default App;
