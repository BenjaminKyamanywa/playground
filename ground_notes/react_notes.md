## 🛠️ React Reference

In this React reference guide are notes taken while learning React from the ground up with helpful links to provide guidance a long the journey. 

React is a declarative paradigm that enables us to give our apps some state, components that are built with JSX that sometime also receive properties(props) as a giant Javascript object which creates a virtualDOM which is used by the React library to update the DOM for us instead of telling our apps exactly what we need them to do.

## Helpful Links
    - React Docs: https://react.dev/
    - React Cheat Sheet: https://zerotomastery.io/cheatsheets/react-cheat-sheet/

## Topics
  - [React Concepts](#react-concepts)
  - [The Job of a React Developer](#the-job-of-a-react-developer)
  - [React Basics](#react-basics)
  - [Functional Components](#functional-components)

## React Concepts

1. Don't touch the DOM i'll do it
    - What is the DOM?
      - It's what a browser uses to display a website or an app.
      - React was built to make changes to the DOM. As such it makes very good use of the ReactDOM where we define expected changes and React takes care of the rest.
2. Build websites like Lego blocks
    - This helps us to build re-usable components that can be used across our websites and apps.
    - We focus on smaller pieces that we can add to one another to build out our full fledged websites & apps.
3. Unidirectional(one way) data flow
    - It helps with our data flow to flow in one direction from parent components to children, which helps reduce complexity of our apps and makes debugging easier.
4. React focuses on the UI, the rest is up to you
    - React focuses on the UI (components and the VirtualDOM) and as such it only works with the view gives us the flexibility to easily work with othe libraries. 

## The Job of a React Developer

On the path of becoming a great react developer we need to focus on improving with the below principles:

1. Decide on components
    - Decide what is component.
    - How much do we want to break down a component.
    - How do we build re-usable components.
    - How do we break down an app into different components.
2. Decide the state and where it leaves
    - Place state in the appropriate component/s.
3. What changes when state changes 
    - Decide what part of the virtualDOM changes when state changes.

## React Basics

1. Rendering and Re-rendering

What makes a great React developer is understanding the concept of rendering and re-rendering. Discerning when React renders and re-renders our apps is a key concept that helps us become truly revolutionary.  

Rendering is putting some UI onto the page i.e HTML, CSS, Javasript for users to see the final output.

Below we'll see an example of a class component in React to help us see where rendering is happening:

```JSX

// import Component from react
import { Component } from 'react';

class App extends Component {
    // constructor method for our state
    constructor() {
        super();
        // instantiate state
        this.state = {
            name: 'Benjamin'
        };
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo">
                    <p>
                        Edit <code>scr/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                    <p>Hello {this.state.name}</p>
                    <button 
                    onClick={() => {
                       // this.setState({ name: 'John' });  react updates the state with shallow merge object exmple
                       // recommended: passing a function with setState
                       this.setState((state, props) => { // we can use state and props: different values we can pass to our components
                        // we add an updater function
                        return {
                            { name: 'John' }
                        }
                       }, () => {});
                    }}
                    >Click Me<button>
                </header>
            </div>
        );
    }
}

export default App;

```

## Functional Components

React uses functional components with hooks to achieve behavior similar to class components. These are basically ES6 functions. They don't run through lifecycles like class components as they run from top to botom of the function.

React Hooks
- `useState`: A react hook that let's us add a state variable to our components. Syntax `const [state, setState] = useState(initialState)` - utilizes array destructuring.

```JSX

import { useState } from 'react';
import SearchBod from '...add here component path'/

// our app 
const App = () => {

    // useState utilizes array destructuring to return two values we can use
    const [searchField, setSearchField] = useState(''); // [value, setValue]

    const onSearchChange = (event) => {
        const searchFieldString = event.target.value.toLowerCase();
        setSearchField(searchFieldString);
    }

    return (
        // add template UI code
        <div className='App'>
            <h1 className='app-title'>Creatures Zone</h1>

            <SearchBox 
                className='creatures-search-box'
                onChangeHandler={onSearchChange}
                placeholder = 'search creatures'
            />
        </div>
    )
}

```

### Pure functions
- A function is considered pure when everything that dicates what it returns is completely isolated from what gets passed into it.
- Returns the same exact result no matter how many times it gets called when given the same arguments.
- It should not produce side effects.

```JS

const pureFunction = (a, b) => {
    retunr a + b;
}

pureFunction(2, 4); // no matter how many times we call it, should always return 6 as the result.

```

### Impure functions
- If a function has to rely on something outside of it's scope and beyond the parameters being passed into it.
- In react we are going to be using impure functions because we utilize hooks to create them which cause side effects.

```JS

let c = 3;

const sideEffectFunction = (a, b) => {
 c = a + b;
 return a * b;
}

// if we change C
c = 4;

```

### Side Effects
- A side effect is when a function creates some kind of effect outside of it's scope. In our example below variable `C` is being set outside of the scope of `sideEffectFunction`.

```JS

let c = 3;

const sideEffectFunction = (a, b) => {
 c = a + b;
 return a * b;
}

// if we change C
c = 4;

sideEffectFunction(2, 4) // 8

```