import React from 'react';
import logo from './CCLogo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://atginfo.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          To ATG Website
        </a>
      </header>
    </div>
  );
}

export default App;
