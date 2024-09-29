## 🛠️ Javascript Reference

In this Javascript reference guide are notes taken while learning Javascript|ECMAScript from the ground up with helpful links to provide guidance a long the journey.

## Helpful Links
  - MDN Docs: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/
  - Javascript Info: https://javascript.info/intro
  - Advanced JS Cheat Sheet: https://zerotomastery.io/cheatsheets/javascript-cheatsheet-the-advanced-concepts/
  

## Topics
  - [Introduction](#introduction)
  - [Inline Javascript Handlers and Event handlers](#inline-javascript-handlers-and-event-handlers)
  - [Script Loading strategies](#script-loading-strategies)
  - [Thinking like a programmer](#thinking-like-a-programmer)
  - [Troubleshooting Javascript](#troubleshooting-javascript)
  - [Storing information we need - Variables](#storing-information-we-need--variables)

## Introduction

JavaScript is a programming language that allows us to implement complex functionalities on web pages and was initially created to “make web pages alive”. 

It was  created by [Brendan Eich](https://en.wikipedia.org/wiki/Brendan_Eich) in 1995. It's official name and specification is [ECMAScript](http://en.wikipedia.org/wiki/ECMAScript).

Today, JavaScript can execute not only in the browser, but also on the server, or actually on any device that has a special program called the [JavaScript engine](https://en.wikipedia.org/wiki/JavaScript_engine). The programs in Javascript are called scripts cause they can be written right in a web page’s HTML and run automatically as the page loads.

Scripts are provided and executed as plain text. They don’t need special preparation or compilation to run.

#### Why is it called JavaScript?
- When it was created, initially it had another name: “LiveScript”. But Java was very popular at that time, so it was decided that positioning a new language as a “younger brother” of Java would help.
- But as it evolved, JavaScript became a fully independent language with its own specification called `ECMAScript`, and now it has no relation to Java at all.


Example: 

```html

<!-- Index -->
<button type="button">Player 1: Ben</button>

```

```css

/* button styling */

button {
  font-family: "helvetica neue";
  text-transform: uppercase;
  border: 2px solid rgb(200 200 0 / 60%);
  background-color: rgb(0 217 217 / 60%);
  color: rgb(100 0 0 / 100%);
  box-shadow: 1px 1px 2px rgb(0 0 200 / 40%);
  border-radius: 5px;
  padding: 3px 10px;
  cursor: pointer;
}

```

```js

// button javascript functionality
const button = document.querySelector("button");

// update name user adds when button is clicked
button.addEventListener("click", updateName);

function updateName() {
  // request user to add any name
  const name = prompt("Enter a new name");
  button.textContent = `Player 1: ${name}`;
}

```

### What can in-browser Javascript do:
- Store useful values inside variables.
- Perform operations on strings.
- React to user actions, run on mouse clicks, pointer movements, key presses.
- Add new HTML to the page, change the existing content, modify styles.
- Send requests over the network to remote servers, download and upload files (so-called AJAX and COMET technologies).
- Get and set cookies, ask questions to the visitor, show messages.
- Remember the data on the client-side (“local storage”).

### What can't in-browser Javascript do:
- It may not read/write arbitrary files on the hard disk, copy them or execute programs. It has no direct access to OS functions. Modern browsers allow it to work with files, but the access is limited and only provided if the user does certain actions, like “dropping” a file into a browser window or selecting it via an `<input>` tag.
- Different tabs/windows generally do not know about each other. Sometimes they do, for example when one window uses JavaScript to open the other one. But even in this case, JavaScript from one page may not access the other page if they come from different sites (from a different domain, protocol or port). This is called the “Same Origin Policy”. To work around that, both pages must agree for data exchange and must contain special JavaScript code that handles it. We’ll cover that in the tutorial.
- It can easily communicate over the net to the server where the current page came from. But its ability to receive data from other sites/domains is crippled. Though possible, it requires explicit agreement (expressed in HTTP headers) from the remote side. It’s a safety limitation.

### Internal Javascript

We can add Javascript internally to our web pages with the help of a `<script></script>` element that's added before our closing `≤/body≥` tag. The script tag is added at the bottom of our document after our  `HTML` and `CSS` files to allow for the page to load with our markup and styles before we plug in the interactivity. As such that's the organization flow of files on our webpages.

Example: We add a text element with Javascript to the page each time a user clicks the button.

```html

<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>JS example</title>
  </head>
  <body>
    <button>Click Me</button>
    <!-- we'll add the JS code for here in the below -->
    <script>
      // internal javascript goes here
      function createParagraph() {
        // create paragraph element
        const paragraph = document.createElement('p');
        // add content to the paragraph element
        paragraph.textContent = 'You clicked the button';
        // add paragraph element to the bottom of the body
        document.body.appendChild(paragraph);
      }

      // select button element
      const buttons = document.querySelectorAll("button");

      // add paragraph element plus text each time button is clicked
      for (const button of buttons) {
        button.addEventListener('click', createParagraph);
      }
    </script>
  </body>
</html>

```

### Comments
- We can add comments to our code that will be ignored by the browser as they exist to provide instructions to fellow developers (*and us if we come back many months/years later and can't remember what we did*) on how the code we've written works.
- Single Line comment: written after a double forward slash (`//`)

```js
// this is a single line comment

```

- Multi-line comment is written between the strings `/*` and `*/`.

```js
/*

This is a mutli-line
comment

*/

```

## Inline Javascript Handlers and Event handlers

- It's bad practise to pollute our HTML with these as we would need to add functions to all HTML elements where we need behavior to happen. for example with a button click.

```html

<button onclick="createParagraph()"></button>

<script>
  // JS function for a button click
  function createParagraph() {
      // add logic
  }
<script>

```

### Event Handlers

Instead of including JavaScript in our HTML, we ccan use a pure JavaScript construct. The `querySelectorAll()` function allows us to select all the buttons on a page. We can then loop through the buttons, assigning a handler for each using `addEventListener()`. 

Code example for this is shown below:

```js

const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", createParagraph);
}

```

## Script Loading strategies
- If we are loading external scripts we can add it to the `<head>` of our HTML document with a type attribute `module`, it's syntax `<script type="module"></script>`.
- The advantage of this is that the browser knows to load the external script after the HTML and CSS are loaded hence as such if a user is connected to a slower network our javascript won't take forever nor never load as opposed to if we put it at the bottom before the closing `</body>` tag.
- It's best practise to put external scripts in the `<head>` element with the module `attribute`.

## Thinking like a programmer

One of the hardest things to learn in programming is not the syntax you need to learn, but how to apply it to solve real-world problems. We need to start thinking like a programmer. 

This generally involves: 
- Looking at descriptions of what our program needs to do. 
- Working out what code features are needed to achieve those things, and how to make them work together.

**This requires a mixture of hard work, experience with the programming syntax, and practice — plus a bit of creativity. The more we code, the better we'll get good at it.**

Example: Guess the number game

Game brief:
> I want you to create a simple guess the number type game. It should choose a random number between 1 and 100, then challenge the player to guess the number in 10 turns. After each turn, the player should be told if they are right or wrong, and if they are wrong, whether the guess was too low or too high. It should also tell the player what numbers they previously guessed. The game will end once the player guesses correctly, or once they run out of turns. When the game ends, the player should be given an option to start playing again.

Brief breakdown into simple actionable tasks in as much of a programmer mindset as possible:
1. Generate a random number between 1 and 100
2. Record the turn number the player is on. Start it on 1.
3. Provide player with a way to guess what the number is.
4. Once a guess is submitted record it somewhere first so the player can see their previous guesses.
5. Next, check whether it's the correct number.
6. If it's correct:
    - i. Display congratulations message.
    - ii. Prevent the player from being able to enter more guesses (this would disrupt the game).
    - iii. Display control allowing player to restart the game.
7. If it's wrong and the player has turns left:
    - i. Tell the player they are wrong and whether their guess was too high or too low.
    - ii. Allow player to make another guess.
    - iii. Increment turn number by 1.
8. If it's wrong and player has no turns left:
    - i. Tell player it's game over.
    - ii. Stop player from being able to make more guesses (this would disrupt the game).
    - iii. Display control allowing player to restart the game.
9. Once game restarts, make sure the game logic and UI are completely reset and go back to step 1.

**Project Link**: We can find the Guessing game project on Codepen [here](https://codepen.io/benjaminkyamanywa/pen/PoMYrQq)

## Troubleshooting Javascript

Here we'll cover some tips on how to find and fix errors in Javscript programs.

### Types of errors

Generally, when we do something wrong in code, there are two types of errors we'll face:

- Syntax errors
  - Spelling errors in code that cause our programs not to run at all, or to stop running part way through.
- Logic Errors
  - Syntax is correct but the code isn't what we intend it to be, meaning that the program runs successfully but gives incorrect results.
  - Often harder to fix as there aren't usually error messages to direct us to the source of the issue.

Example syntax errors:

```js

/********** Example One - typo with addEventListener JS built in function **********/

guessSubmit.addeventlistener('click', checkGuess); // Error: Uncaught TypeError: guessSubmit.addeventListener is not a function. We have a type with '.addevenelistener'

guessSubmit.addEventListener('click', checkGuess) // we fix the typo in '.addEventListener'

/********** Example Two - typo with parameter for querySelector() **********/

const lowOrHi = document.querySelector('lowOrHi'); // Error: Uncaught TypeError: Cannot set properties of null (setting 'textContent')

// const lowOrHi = document.querySelector('.lowOrHi'); - we need to add a fullstop at the start of our parameter .querySelector('.lowOrHi')

lowOrHi.textContent = 'Last guess was too high!';


```

Example logic error:

```js

/********** Example - randomNumber always returns one **********/

let randomNumber = Math.floor(Math.random()) + 1; // always returns 1 instead of a different random number

// generates a random number between 1 and 100
Math.floor(Math.random() * 100) + 1;
// Math.random(): generates a random decimal number between 0 and 1, e.g. 0.5675493843
// Math.floor(Math.random() * 100) + 1: we pass the result of invoking Math.random() through Math.floor(), we multipy it by 100 to generate a random number between 0 and 99 as it gets rounded to the nearest whole number. We then add 1 to that result to make our random number between 1 and 100.

```

### Other common errors

There are other possible errors we can come across in our code. Below are some examples:

- Syntax Error: missing `)` after argument list
  - It means that we've missed the closing parenthesis at the end of a function/method call.
- Syntax Error: missing `:` after property id
  - Relates to an incorrectly formed Javascript object.
- Syntax Error: missing `}` after function body
  - It means we've missed one of our curly braces from a function or conditional structure.
- SyntaxError: expected expression, got 'string' | Syntax Error: string literal contains an unescaped line break
  - These errors generally mean that we've left off a string value's opening or closing quote mark.
  - With the first error, a string would be replaced with the unexpected character(s) that the browser found instead of a quote mark at the start of a string.
  - The second error means that the string has not been ended with a quote mark.

MDN: [**JavaScript errors reference guide**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors)

## Storing information we need — Variables

A variable is a container for a value that we use to store for instance a number we might use in a sum, or a string we might use as part of a sentence.

In Javascript we predominantly use `let` and `const` to declare and initialize our variables.
There is another way using `var` however it has unexpected behaviors and as such we don't use.

Most of the time we use `const` when we can and `let` when we have to which means if we can initialize a variable when we declare it and don't need to re-assign it later, use `const`.


Example:

```html

<button id="button">Click Me</button>
<h2 id="heading"></h2>

<script>
// 1. Change text of the button
// 2. Show number of times button has been clicked in the heading 
// 3. Store the number of times in a variable

const button = document.querySelector('#button');
const heading = document.querySelector('#heading');

let count = 1;

button.onclick = () => {
  button.textContent = 'Try again';
  heading.textContent = `${count} clicks so far!`;
};


// Declaring and Initializing Variables
const firstName = 'Foo';
const lastName = 'bar';

function logName() {
  console.log(`Hi there my first name is ${firstName} and my last name is ${lastName}`);
}

logName();

</script>

```

#### Variable naming rules
- Stick to using latin characters (0-9, a-z, A-Z) and the underscore character.
- No use of underscores at the start of variable names as it's used in certain constructs to mean specific things, so it can get confusing.
- Don't use numbers at the start of variable names, it will throw and error as it isn't allowed.
- A safe convention to use is `lowerCamelCase`. Stick together words with lower case for the first word and capitalize subsequent words.
- Make variable names intuitive so that they clearly describe the data they contain. Don't just use single letters/numbers, or big long phrases.
- They are case sensitive therefore `myage` is different from `myAge`.
- Avoid using Javascript reserved words as variable names e.g `var`, `function`, `let`, `for`. 

### Javascript commands

```js

/***Variables***/
let x; // Declares block-scoped variable 
const y; // Declares block-scoped read-only constant variable

/***Functions***/
function name() {
  // Function declaration
}

const myFunction() => {
  // Arrow function expression
}

/***Conditional Statements***/
if (condition) {
  // Executes if condition is true
} else if (otherCondition) {
  // Executes if other condition is true
} else {
  // Executes if all conditions are false
}

/***Loops***/
for (let i = 0; i < 10; i++) {
  // runs code for as long as condition is true
}

while (condition) {
  // runs code while condition set is true
}

do {
  // executes code block at least once and repeats while condition is true
} while (condition);

/***Array Methods***/
let arr = [1, 2, 3];
arr.push(4); // Adds an element to the end of an array
arr.pop(); // Removes the last element of an array
arr.shift(); // Removes the first element from an array
arr.unshift(); // Adds an element to the beginning of an array

/***Object Methods***/
let obj = {name: "John Doe", age: 15}
Object.keys(obj) // returns an array of objects' keys
Object.values(obj); // returns an arrya of objects' values
Object.entries(obj); // returns an array of objects' key-value pairs

/***String Methods***/
let str = "Helo world!";

str.length; // returns length of a string
str.toUpperCase(); // converts string characters to upper case
str.toLowerCase(); // converts string characters to lower case
str.includes('helo'); // checks if string includes word added in 'brackets'

/***DOM Manipulation***/
document.getElementById('foo'); // selects html element base on ID selector
document.querySelector('.bar'); // selects element based on the selector. For classes use dot notation with class name e.g '.bar' and for ID's use selector notation e.g '#bar'
document.querySelectorAll('div') // selects all elements that match selector
document.createElement('div'); // creates a new html element



```