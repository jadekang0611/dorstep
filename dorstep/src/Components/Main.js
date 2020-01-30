import React from 'react';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Link, Switch } from 'react-router-dom';
import About from './About';
import Questions from './Questions';

function Main() {
  return (
    <div>
      <nav>
        <Header />
      </nav>
      <hr className="nav-line "></hr>

      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/questions" component={Questions} />
        <Route path="/about" component={About} />
      </Router>
    </div>
  );
}

export default Main;
