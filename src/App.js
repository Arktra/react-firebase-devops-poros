import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App-wrapper">
      <Navbar />
      <div className="content">
        <h1>Bookstore Portal</h1>
      </div>
      <Footer />
    </div>
  );
}

export default App;