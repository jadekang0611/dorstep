import React from 'react';
import Main from './Components/Main';
import Header from './Components/Header';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <nav>
          <Header />
        </nav>
        <hr></hr>
        <Main />
      </div>
    );
  }
}

export default App;
