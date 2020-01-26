import React from 'react';
import '../Styles/Questions.css';
import logo from '../dorstep-logo.svg';
import Lifestyle from '../Components/Questions/Lifestyle';
import Cities from '../Components/Questions/Cities';
import Payment from '../Components/Questions/Payment';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Link, Switch } from 'react-router-dom';

function Questions(props) {
  return (

    <div>
      <header>
        <div className="brand">
          <img src={logo} alt="dorstep logo"></img>
          <h1>dorstep</h1>
        </div>
      </header>
      <hr></hr>
      <Router>
              <Route exact path="/questions" component={Lifestyle}></Route>
              <Route exact path="/questions/cities" component={Cities}></Route>
              <Route exact path="/questions/payment" component={Payment}></Route>
      </Router>

      <footer className="footer">
        <div></div>
      </footer>
    </div>
  );
}

export default Questions;
