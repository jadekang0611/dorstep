import React from 'react';
import background from '../background1.svg';
import '../Styles/Main.css';

function Main() {
  return (
    <div className="container">
      <div className="content">
        <h1 className="content-one">Search.Discover.Live</h1>
        <p className="content-two">We'll get your doorstep to Korea easy!</p>
        <button>
          <span>Find my place</span>
        </button>
      </div>
      <img src={background} alt="background"></img>
    </div>
  );
}

export default Main;
