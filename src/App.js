import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="left">
        <div className="info">
          <div className="info-title">Watch<span>Movies</span></div>
          <div className="info-image">
            <div className="img"></div>
          </div>
          <span className="info-author">Mary Jane</span>
        </div>
        <div className="menu"></div>
        <div className="label-tag"></div>
      </div>
      <div className="movie"></div>
    </div>
  );
}

export default App;
