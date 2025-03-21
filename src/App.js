import React from 'react';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="App-container">
      <Navbar />
      <div className="main-content">
        <h1>BookHaven Online Store</h1>
      </div>
    </div>
  );
}

export default App;