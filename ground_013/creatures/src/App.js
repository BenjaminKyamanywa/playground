import { Component } from 'react';
import './App.css';

class App extends Component {

  // constructor method for our state which is called first when our app initially runs
  constructor() {
    super();

    // instantiate state
    this.state = {
      creatures: [],
      searchField: ''
    };
  }

  // component mount initialization for our API data call is called third when our app runs
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users/')
      .then((response) => response.json())
      .then((users) => 
        this.setState(
          () => {
          return { creatures: users }
          }, () => {
          console.log(this.state)
          }))
  }

  render() {
    // render is called second when our app runs
    // filter search result
    const filteredCreatures = this.state.creatures.filter((creature) => {
      return creature.name.toLocaleLowerCase().includes(this.state.searchField);
    });


    return (
      <div className="App">
        <input className='search-box' type='search' placeholder='search creatures'
          onChange={(event) => {
            // change search string toLowercase
            const searchField = event.target.value.toLocaleLowerCase();

            // monsters equals new array
            this.setState(() => {
              return { searchField };
            });
          }}
        />
        {this.state.creatures.map((creature) => {
          return (
            <div key={creature.id}>
              <h1>{creature.name}</h1>
            </div>
          )
        })}
      </div>
    );

  }
}

export default App;
