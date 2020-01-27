import React from 'react';
import '../Styles/Header.css';
import logo from '../dorstep-logo.svg';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Navbar.Brand href="#home">
        <img
          alt=""
          src={logo}
          width="60"
          height="60"
          className="d-inline-block align-top"
        />{' '}
      </Navbar.Brand>
      <h1 className="brand">dorStep</h1>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link className="nav-item" href="#home">
            About
          </Nav.Link>
          <Nav.Link className="nav-item" href="#features">
            How it works
          </Nav.Link>
          <Nav.Link className="nav-item" href="#pricing">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
