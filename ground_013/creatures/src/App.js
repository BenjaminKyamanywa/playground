import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  // constructor method for our state
  constructor() {
    super();

    // instantiate state
    this.state = {
      monsters: [],
    };
  }

  // component mount initialization
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users/')
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );

  }
}

export default App;
