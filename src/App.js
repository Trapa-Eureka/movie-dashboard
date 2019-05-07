import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="left">
        <div className="info">
          <span className="info-title">WatchMovies</span>
          <div className="info-image"></div>
          <span className="info-author"></span>
        </div>
        <div className="menu"></div>
        <div className="label-tag"></div>
      </div>
      <div className="movie"></div>
    </div>
  );
}

export default App;
