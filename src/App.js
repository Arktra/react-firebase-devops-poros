import React from 'react';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <header className="App-header">
          <h1>Welcome to BookHaven</h1>
          <p>Discover your literary adventure</p>
        </header>
        <main>
          <p>Browse our extensive collection of books from various genres and authors.</p>
        </main>
      </div>
    </div>
  );
}

export default App;