import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <header className="App-header">
          <h1>Welcome to Bookstore</h1>
          <p>Find your next favorite book</p>
        </header>
        <main>
          <p>Browse our collection of books and discover new authors.</p>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;