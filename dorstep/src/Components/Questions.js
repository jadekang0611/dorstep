import React from 'react';
import '../Styles/Questions.css';
import logo from '../dorstep-logo.svg';
import Question from './Question';

function Questions() {
  return (
    <div>
      <header>
        <div className="brand">
          <img src={logo} alt="dorstep logo"></img>
          <h1>dorstep</h1>
        </div>
      </header>
      <hr></hr>
      <Question />
      <footer className="footer">
        <div></div>
      </footer>
    </div>
  );
}

export default Questions;
