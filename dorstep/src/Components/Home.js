import React from 'react';
import background from '../background1.svg';
import '../Styles/Home.css';
import { Link, Route } from 'react-router-dom';
import Questions from './Questions';

function Home() {
  return (
    <div className="container">
      <div className="content">
        <h1 className="content-one">Search.Discover.Live</h1>
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
