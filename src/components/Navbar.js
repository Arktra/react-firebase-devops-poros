import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/">BookHaven</a>
        </div>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a href="/" className="navbar-link">Home</a>
          </li>
          <li className="navbar-item">
            <a href="/catalog" className="navbar-link">Catalog</a>
          </li>
          <li className="navbar-item">
            <a href="/bestsellers" className="navbar-link">Bestsellers</a>
          </li>
          <li className="navbar-item">
            <a href="/new-releases" className="navbar-link">New Releases</a>
          </li>
          <li className="navbar-item">
            <a href="/contact" className="navbar-link">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;