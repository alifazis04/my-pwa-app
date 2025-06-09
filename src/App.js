import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 flex items-center justify-center text-white">
      <div className="text-center space-y-6 p-10 bg-white/10 backdrop-blur-md rounded-2xl shadow-lg">
        <img
          src={logo}
          className="animate-spin-slow h-28 mx-auto"
          alt="React Logo"
        />
        <h1 className="text-4xl font-bold drop-shadow-lg">Welcome to React!</h1>
        <p className="text-lg">
          Edit <code className="bg-white/20 px-2 py-1 rounded-md">src/App.js</code> and save to reload.
        </p>
        <a
          className="inline-block px-6 py-3 bg-white text-purple-700 font-semibold rounded-lg shadow-md hover:bg-purple-100 transition-all duration-300"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          🚀 Learn React
        </a>
      </div>
    </div>
  );
}

export default App;
