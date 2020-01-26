import React from 'react';
import '../Styles/Header.css';
import logo from '../dorstep-logo.svg';

function Header() {
  return (
    <header>
      <div className="brand">
        <img src={logo} alt="dorstep logo"></img>
        <h1>dorstep</h1>
      </div>
      <ul className="nav-bar">
        <li className="nav-item">About</li>
        <li className="nav-item">How it works</li>
        <li id="contact" className="nav-item">
          Contact
        </li>
      </ul>
    </header>
  );
}

export default Header;
