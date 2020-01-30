import React from 'react';
import '../Styles/Questions.css';
import logo from '../dorstep-logo.svg';
import Cities from '../Components/Questions/Cities';
import Payment from '../Components/Questions/Payment';
import ShowProperties from '../Components/ShowProperties';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Link, Switch } from 'react-router-dom';

function Questions(props) {
  return (
    <div>
      <Router>
        <Route exact path="/questions/" component={Cities}></Route>
        <Route path="/questions/payment" component={Payment}></Route>
        <Route
          exact
          path="/questions/properties"
          component={ShowProperties}
        ></Route>
      </Router>

      <footer className="footer-box-questions">
        <p>&copy; Copyright 2020 Dorstep. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Questions;
