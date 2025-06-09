import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <nav className="navbar">
        <h1 className="brand">🚀 Reactify</h1>
        <a
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link"
        >
          Learn React
        </a>
      </nav>

      <main className="hero-section">
        <img src={logo} alt="React Logo" className="logo-floating" />
        <h2 className="headline">Build Modern Web Apps Effortlessly</h2>
        <p className="description">
          Start editing <code>src/App.js</code> and save to see the magic!
        </p>
        <button className="cta-button" onClick={() => alert("React is awesome!")}>
          ✨ Get Started
        </button>
      </main>

      <footer className="footer">
        <p>Made with 💙 by Alif Azis</p>
      </footer>
    </div>
  );
}

export default App;
