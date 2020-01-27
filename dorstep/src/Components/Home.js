import React from 'react';
import background from '../background1.svg';
import '../Styles/Home.css';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home() {
  return (
    <div className="home-container">
      <div className="content">
        <Container>
          <Row>
            <Col>
              <h1 xs={12} md={4} className="content-one">
                Search.
              </h1>
            </Col>
            <Col>
              <h1 xs={12} md={4} className="content-one">
                Discover.
              </h1>
            </Col>
            <Col>
              <h1 xs={12} md={4} className="content-one">
                Live.
              </h1>
            </Col>
          </Row>
        </Container>
        <p className="content-two">We'll get your doorstep to Korea easy!</p>

        <Link to="/questions">
          <button>
            <span>Find my place</span>
          </button>
        </Link>
      </div>
      <img className="main-image" src={background} alt="background"></img>
      <footer>
        <p>&copy; Copyright 2020 dorStep</p>
      </footer>
    </div>
  );
}

export default Home;
