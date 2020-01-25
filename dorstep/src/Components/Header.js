import React from 'react';
import '../Styles/Header.css';

function Header() {
  return (
    <header>
      <div className="brand">
        {/* logo goes in here   */}
        <h1>DorStep</h1>
      </div>
      <ul className="nav-bar">
        <li className="nav-item">About</li>
        <li className="nav-item">How it works</li>
        <li className="nav-item">Info</li>
      </ul>
    </header>
  );
}

export default Header;
