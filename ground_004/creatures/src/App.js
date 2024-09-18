import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
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
        // eslint-disable-next-line
        this.setState(
          () => {
          return { creatures: users }
          }, () => {
          console.log(this.state)
          }))
  }

  // optimization: add onSearchChange function
  onSearchChange = (event) => {
    // change search string toLowercase
    const searchField = event.target.value.toLocaleLowerCase();

    // monsters equals new array
    this.setState(() => {
      return { searchField };
    });
  }

  // render is called second when our app runs
  render() {

    // destructuring: use variables from this.state and this to make our code cleaner
    const { creatures, searchField } = this.state;
    const { onSearchChange } = this;
    
    // filter search result
    const filteredCreatures = creatures.filter((creature) => {
      return creature.name.toLocaleLowerCase().includes(searchField);
    });


    return (
      <div className="App">
      <h1 className='app-title'>Creature Rols</h1>
      <SearchBox 
      className = 'monsters-search-box'
      onChangeHandler = { onSearchChange} 
      placeholder = 'search creatures'/>
      <CardList creatures = { filteredCreatures } />
      </div>
    );

  }
}

export default App;
