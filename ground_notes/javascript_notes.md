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
  - [Maths in Javascript - Numbers and Operators](#maths-in-javascript---numbers-and-operators)
  - [Handling Strings in Javascript](#handling-strings-in-javascript)
  - [Arrays](#arrays)
  - [Conditions in Javascript (if...else)](#conditions-in-javascript-ifelse)
  - [Logical Operators: AND, OR, NOT](#logical-operators-and-or-not)
  - [Switch Statements](#switch-statements)
  - [Ternary Operator](#ternary-operator)
  - [Javascript commands](#javascript-commands)

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


### Maths in Javascript - Numbers and Operators

We'll cover how we can use operators and other features to successfully manipulate numbers to do our bidding.

We have different types of numbers:
  - Integers: positive or negative numbers e.g 20, 30, -5
  - Decimals(Floating point): have decimal points and decimal places e.g 4.5, 9.7

Different number Systems:
    - Binary: lowest level computer numbering system e.g 0s and 1s
    - Octal: Base 8 numbers use 0-7 in each digit.
    - Hexadecimal: Base 16, use 0-9 and a-f in each digit e.g #c55da1

#### Convert to number data type
- Sometimes we have for instance strings especially from form inputs and we need to convert info to a number data type. Javascript provides a Number method that we can use.

```js

let numToStr = '55';
total = Number(numToStr) + 3; // convert string to number with Number method
console.log(total);

```

#### Arithmetic Operators

| Operator    | Name    | Purpose   | Example        |
| ----------- | --------- | ----------- | --------- |
| + | Addition | Adds two numbers together | 6 + 9 |
| - | Subtraction | Subtracts two numbers | 5 - 7 |
| * | Multiplication | Multiplies two numbers | 5 * 7 |
| * | Multiplication | Multiplies two numbers together | 5 * 7 |
| / | Division | Divides left number from right number | 6 / 3 |
| % | Remainder (Modulu) | Returns remainder after dividing left number into integer portions equal to the right number | 8 % 3 (returns 2, as three goes into 8 twice, leaving 2 left over) |
| ** | Exponent | Raises base number to the exponent power, that's, the base number multiplied by itself, exponent times.	| 5 ** 2 (returns 25, which is the same as 5 * 5) |

#### Assignment Operators

| Operator    | Name    | Purpose   | Example       | Shortcut |
| ----------- | --------- | ----------- | --------- | --------- |
| += | Addition assignment | Adds right value to variable and returns new variable value | x += 4 | x = x + 4 |
| -= | Subtraction assignment | Subtracts right value from variable and returns new variable value | x -= 3 | x = x - 3 |
| *= | Multiplication assignment | Multiplies right value with variable and returns new variable value | x *= 2 | x = x * 2 |
| /= | Division assignment | Divides right value with variable and returns new variable value | x /= 6 | x = x / 6 |

#### Comparison Operators

| Operator    | Name    | Purpose   | Example        |
| ----------- | --------- | ----------- | --------- |
| === | Strict equality | Checks whether left and right values are identical | 6 === 9 + 2 |
| !== | Strict non-equality | Checks whether left and right values are not identical | 6 !== 9 + 2 |
| < | Less than | Checks whether left value is smaller than right value | 6 < 9 |
| > | Greater than | Checks whether left value is greater than right value | 6 > 20 |
| <= | Less than or equal to | Checks whether left value is smaller than or equal to right value | 3 <= 5 |
| >= | Greater than or equal to | Checks whether left value is greater than or equal to right value | 3 >= 5 |

### Handling Strings in Javascript

We'll cover the most common string operations in Javascript such as creation, escaping quotes and joining strings.

String delcaration:
  - We use quotes to define characters as strings we can use either single (' '), double(" ") or backticks (` `) e.g 'Hello world', "Welcome home", \`You rock`.
  - Maintain the same style for the quotes used at the start and end of a string to avoid errors.
  - If we miss to add a quote at either the start of finish we get errors e.g 'unterminated string literal' or 'missing; before  statement'
  - String concatenation can help us join two strings however, for readability it's recommneded to use backticks. e.g ('Hello' + , + 'World');
  - We can escape characters such as punctuation marks in strings so they aren't considered as code e.g ('I\'m striving for mastery as a developer').
  - We can add Javascript operations when we use backticks as well as variables e.g `Hello, I am ${name}`, \`We get ${ 2 + 4} after adding the numbers 2 and 4`.

#### Useful string methods

We'll cover here useful operations we can do on strings with built in Javascript methods.

For instance:
  - Finding length of a text string we use the length method e.g '.length'
  - Joining and splitting strings e.g .join and .split
  - Substituting one character in a string for another

#### Finding length of a string

This help us find out how many characaters are part of a string.

Uses:
  - Checking length of user uersnames/passswords entered into forms and letting users know if too long.
  - Find the length of a series of names in order to display them in order of length.

```js

const string = 'Mozilla';
console.log(string.length); // returns: 7

```

#### Retrieve specific string character

We can retrieve a specific character from a string by utilizing array index notation. e.g string[0] // - this checks our string variable and returns 'o' in index 1 from the word 'Mozilla' as that's where it first appears.

To retrieve the last character of any string we utilize 'string[string.length - 1]';

#### Test if string contains substring

Sometimes we'll need to check if a smaller string is present within a larger one. Basically if a string contains a substring. We can use '.includes()' that takes a single parameter for our substring search. It's case sensitive hence we have to be sure to add exact characters we are searching for as they appear in our string.

```js

const subStringCheck = 'Mozilla';

if (subStringCheck.includes('zilla')) {
  console.log('Found zilla!');
} else {
  console.log('No zilla here please check elsewhere!');
}

```

Sometimes we want to know if a string starts or ends with a particular substring. In this case we can utilize `startsWith()` or `endsWith()` methods.

```js

// startsWith() example
const startsWithCheck = 'Mozilla'

if (startsWithCheck.startsWith('ozil')) {
  console.log('Yayy starts with ozil');
} else {
  console.log('Naayyy no zilla found here!');
}

// endsWith() example

const endsWithCheck = 'Mozilla'

if (endsWithCheck.endsWith('zilla')) {
  console.log('Yaaay ends with zilla')
} else {
  console.log('Naayy no zilla found here!')
}

```

#### Finding position of a substring within a string

We can find the position of a substring within a larger string by utilizing `indexOf()` which returns the first occurrence of the string if it's present and `-1` if it's not. 

It takes two parameters, first is the substring we are looking for and an optional parameter that specifies the starting point of the search.

```js

const subStringWithinString = 'MDN - Best resource for developers, by developers';
console.log(subStringWithinString.indexOf('developers')); // 24

console.log(subStringWithinString.indexOf('x')); // -1
// returns -1 because the character x isn't part of our string 

```

Starting at 0, if we count the number of characters (including whitespace) from the beginning of the string, the first occurrence of the substring "developers" is at index 24.


How we can find additional occurrences of a substring:
  - We pass in a value that's greater than the index of previous occurrence as second parameter to indexOf() method.

```js

const subStringWithinString = 'MDN - Best resource for developers, by developers';

const firstOccurrence = subStringWithinString.indexOf('developers');
const secondOccurrence = subStringWithinString.indexOf('developers', firstOccurrence + 1);
// we are telling the method to search for the substring 'developers' starting at index 24 (firstOccurrence + 1), and it returns the index 39

console.log(firstOccurrence); // 24
console.log(secondOccurrence); // 39

```

#### Extracting a substring from a string

We can extract a substring from a string using 'slice()' method, we pass it:
  - 1st: Index at which to start extracting.
  - 2nd: Index at which to stop extracting. It's exclusive meaning that the character at this index is not included in the extracted substring.

```js

const browser = 'mozilla';
console.log(browser.slice(1, 4)); // 'ozi'

// character at index 1 is '0', and the character at index 4 is 'l'. So we extract all characters starting at 'o' and ending just before 'l' giving 'ozi'.

/*

if we want to return all remaining characters in a string from a certain character we don't need to include the second parameter.

*/

console.log(slice(2)); //returns: zilla (cause character at position two is 'z' and since we didn't add a second param substring returned is all the remaining characters within the string)

```

#### Changing Case

We can utlize toUpperCase() and toLowerCase() to change the case of charaters. It can be helpful in case we'd like to save data to a database with a specific case.

```JS

const userGreeting = 'Hello World!, I am Driven to Master Problem Solving With Coding';
console.log(userGreeting.toUpperCase()); // HELLO WORLD!, I AM DRIVEN TO MASTER PROBLEM SOLVING WITH CODING
console.log(userGreeting.toLowerCase()); // hello world!, i am driven to master problem solving with coding

```

#### Updating parts of a string

We are able to change parts of a string with a new set of string characters with the help of `replace()`.

We need to utilize two params:
  - 1st: String we want to replace.
  - 2nd: String we want to replace it with.

```js

const stringUpdate = 'mozilla';
const newStringUpdated = stringUpdate.replace('moz', 'van');
console.log(newStringUpdated); // vanilla
console.log(stringUpdate); // mozilla

```

**NB:** `replace()` like many string methods doesn't change the string it's called on, but returns a new string.

### String Exercises

1) Filter Greeting messages
  - We have a list of greetings card messages.
  - We need to show only those that have 'Christmas' message.

```html

<div class='output'>
  <ul></ul>
</div>

<script>
  const list = document.querySelector('.output ul');
  list.textContent = '';
  // our greetings messages
  const greetingsMessages = [
                 'Happy Birthday!',
                 'Merry Christmas my love',
                 'A happy Christmas to all the family',
                 'You\'re all I want for Christmas',
                 'Get well soon'
                 ];

  // our for of loop to display list of messages
  for (const greeting of greetingsMessages) {
    if (greeting.includes('Christmas')) {
      const listItem = document.createElement('li');
      listItem.textContent = greeting;
      list.appendChild(listItem);
    }
  }
</script>

```

2) Fixing Capitalization
  - We have a list of cities and need to fix the capitalization. 
  - Steps:
    - Convert entire string in `city` variable to lowercase and store it in a new variable.
    - Get first letter of the string in the new variable and store it in another variable.
    - Usinge latest variable as a substring replace first letter of lowercase string with first letter of uppercase string and store result in a new variable.
    - Change value of the `result` variable to equal final result, not the city.

```html

<div class='output'>
  <ul></ul>
</div>

<script>
  const list = document.querySelector('.output ul');
  list.textContent = '';
  const cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];

  for (const city of cities) {
    const lower = city.toLowerCase(); // make all characters lowercase
    const firstLetter = lower.slice(0, 1); // get the firstletter of each city
    const capitalized = lower.replace(firstletter, firstletter.toUpperCase()); // replace lowercase city firstletter with uppercase letter
    const result = capitalized; // city with capitalized first letter
    const listItem = document.createElement('li');
    listItem.textContent = result;
    list.appendChild(listItem);
    // result: London, Manchester, Birmingham, Liverpool
  }
</script>

```

3) Making new strings from old parts
  - We have string containing train station information ie three letter station code, machine readable data, station name. e.g 'MAN675847583748sjt567654;Manchester Piccadilly'. We need to extract station code and name so we have 'MAN: Manchester Piccadilly'.
  - Steps:
    - Extract the three letter station code and store it in a variable.
    - Find the character index number of the semicolon with indexOf().
    - Extract station name using the semicolon character index number as a reference point, and store it in a new variable.
    - Concatenate the two new variables and a string literal to make the final string.
    - Change the value of the result variable to the final string, not the station.

```html

<div class="output">
  <ul></ul>
</div>

<script>
  const list = document.querySelector('.output ul');
  list.textContent = '';
  const stations = ['MAN675847583748sjt567654;Manchester Piccadilly',
                  'GNF576746573fhdg4737dh4;Greenfield',
                  'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
                  'SYB4f65hf75f736463;Stalybridge',
                  'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];
  for (const station of stations) {
    const stationCode = station.slice(0, 3);
    const semiColon = station.indexOf(';');
    const stationName = station.slice(semiColon + 1);
    const stationCodeAndName = `${stationCode}; ${stationName}`;
    const result = stationCodeAndName;
    const listItem = document.createElement('li');
    listItem.textContent = result;
    list.appendChild(listItem);
    // result: MAN; Manchester City, GNF; Greenfield, LIV; Liverpool Lime Street, SYB; Stalybridge, HUD; Huddersfield
  }
</script>

```

### Arrays

Basically list like objects. These are single objects that contain multiple values stored in a list.

#### Creating arrays

```js

const shopping = ['bread', 'milk', 'sugar', 'apples'];
console.log(shoping);

// we can mix and match different data types in an array
const items = ['phone', 2, 5, 7, ['sugar', 6, 9]];
console.log(items);

```

#### Finding the length of an array

Similar to finding the length of a string we can find the number of items within an array with the lenght method on an array.

```js

const sportItems = ['jumper', 'shorts', 'canvas', 'vest', 'bag'];
console.log(sporstItems.length) //5

```

#### Accessing and modifying array items

We can access array items by using bracket notation as well as modify them as well. Array items start at index 0.

```js

const houseItems = ['chair', 'table', 'bed', 'basket'];
console.log(houseItems[1]); // table

// we can update an array item as well as below
const roomItems = ['bedsheets', 'photo', 'laptop'];
roomItems[1] = 'cup';
console.log(roomItems);

```

**Multidimensional array:** This is an array that resides within an array. We can as well access the items within it and also and also update/change them as well.

```js

const multidimensionalArray = ['sugar', 'soap', 'bread', ['salt', 'pepper', 'pumpkin']];
multidimensionalArray[3][1];
console.log(multidimensionalArray);

// we can also update items within our multidimensional array.
multidimensionalArray[3][1] = 'cucumber';
console.log(multidimensionalArray)

```

#### Finding the index of items in an array

We can utilize indexOf() if we'd like to know the index of an array item. We pass it the item that we'd like the index of as it takes a parameter of it. If the item is present the index will be returned otherwise if it isn't we shall get -1.

```js

const dogs = ['bulldog', 'german shepheard', 'chiwawa', 'husky', 'tibetan mastif'];
console.log(dogs.indexOf('chiwawa')); // 2
console.log(dogs.indexOf('parrot')); // -1

```

#### Adding items to an array

1) **Add items to end of array**: To add items to the end of an array we use `push()`.

```js

const cities = ['Manchester', 'Liverpool'];
cities.push('Brighton');
// we can also add multiple items to an array with push, we only need to separate with commas
cities.push('Lancaster', 'London');
console.log(cities); // Manchester, Liverpool, Brighton

```

2) **Add items to the start of an array**: We add items to the start iwth `unshift()`.

```js

const towns = ['Acton', 'Balham', 'Barnes']
towns.unshift('Bayswater');
console.log(towns);

```

#### Removing Items from an array

1) **Remove item from end of an array**: To remove an item from an array's end we use `pop()`

```js

const clothes = ['sweat shirt', 'trousers', 'shorts'];
clothes.pop();
console.log(clothes); // ['sweat shirt', 'trousers']

```

2) **Remove item from start of an array**: We use `shift()` to remove an item from the start of an array.

```js

const phones = ['itel', 'infinix', 'samsung', 'iphone'];
phones.shift();
console.log(phones); // ['infinix', 'samsung', 'iphone']

```

- If we know the index of the item we'd like to remove we can use `splice()`, which takes two arguments:
  - 1st: Where we need to start removing items.
  - 2nd: Number of items that should to be removed.

```js

const materials = ['book', 'pen', 'pencil', 'rubber', 'ruler'];
const index = materials.indexOf('pencil');

if (index !== -1) {
  materials.splice(index, 1);
} 
console.log(materials); // ['book', 'pen', 'rubber', 'ruler']

```

#### Accessing every array item

Very often we find ourselves needing to access every array item and for that we user `for...of` loop.

```js

const movies = ['Avengers', 'The Forge', 'Superman', 'Batman'];

for (const movie of movies) {
  console.log(movie);
}

```

#### Array methods

1) `map()`:
      - It's an iterative method that calls a provided call back function once for each element in an array and constructs a new array from the results.
      - Creates a new array populated with the results of calling a provided function on every element on the called array.

```js

// we double the numbers in the array below with map array method

function double(number) {
  return number * 2;
}

const numbers = [1, 2, 3, 5, 6]
const doubledNumbers = numbers.map(double);
/*

  ****How map() is working****
  - We give map() a function
  - map() calls the function once for every item in the array passing in the item.
  - map() then adds the return value from each function call to a new array.
  - map() finally returns the new array.

*/
console.log(doubledNumbers); // [2, 4, 6, 10, 12] 


// Example two:
const newNumbers = [5, 6, 9, 23, 18];
const mapNewArrayNumbers = newNumbers.map((x) => x * 2);
console.log(mapNewArrayNumbers); // [10, 12, 18, 46, 36]

```


2) `filter()`:
    - An iterative method that calls a provided callback function once for each element in an array and constructs a new array for all the values for which the callback function returns a truthy value. Array elements that do not pass the callback function test are not included in the new array.

```js

function isLong(city) {
  return city.length > 6;
}

const cities = ["London", "Liverpool", "Totnes", "Edinburgh"];
const longer = cities.filter(isLong);
/*

  ****How filter() is working****
  - We give filter() a function
  - filter() calls the function once for every item in the array passing in the item.
  - if the function returns true, then the item is added to a new array.
  - filter() finally returns the new array.

*/
console.log(longer); // ['Liverpool', 'Edinburgh']

```

#### Converting between strings and arrays

We'll cover the `split()` method that's actually a string method but more suited for use with arrays. Often times we have big data in a long string and we might want to separate out some some items into a more useful form and then do some actions with them like display in a table. 

`split()`: in it's simplest form takes a single parameter, the character at which  we want to separate the string at and it returns the substrings between the separator as items in an array.

```js

const data = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";

const cities = data.split(','); // we set it to split at each comma from data

console.log(cities);

```

**join()**: 
  - We can use it to do the opposite of split().
  - We can specify different separators.

```js

const newCommaJoined = cities.join(','); // Manchester,London,Liverpool,Birmingham,Leeds,Carlisle

```

**toString()**:
  - We can also use it to convert an array to a string.
  - It's simpler than `join()` as it doesn't take any parameters but it's more limiting.
  - With `join()` we can specify different separators whereas `toString()` always uses a comma.

```js

const dogNames = ["Rocket", "Flash", "Bella", "Slugger"];
dogNames.toString(); // Rocket,Flash,Bella,Slugger

```

**Project: Printing Products**

In this project we'll print out an invoice. 

We need to:
- Print out product names and prices.
- Total prices and show them at the bottom.

Steps:
  - We need to store an array of product names with their prices.
  - We need to be able to go through all our products. Can use `for..of()` loop.
  - We need to split the current array item (name:price) into separate items with one containing the name and the other containing the price which we need to convert to a number.
  - Add current item price to total in each iteration of the loop so that correct total is printed out on the invoice.
  - Show correct information for each item onto the invoice.

```html

<div class="output">
  <ul></ul>
  <p></p>
</div>

<script>

const list = document.querySelector('.output ul');
const total = document.querySelector('.output p');
let total = 0;
list.textContent = '';
total.textContent = '';

//step 1: initialize products in an array
const products = [
                'Underpants:6.99',
                'Socks:5.99',
                'T-shirt:14.99',
                'Trousers:31.99',
                'Shoes:23.99'
                ];
// step 2: for...of loop to go through every product item
for (const product of products) {
  // step 3: split name and price into separate variables
  const splitArray = product.split(':');
  const productName = splitArray[0];
  const productPrice = splitArray[1];
  // step 4: add current price for each product to print our correct total on our invoice
  total += productPrice;
  // step 5: show correct product name and price onto invoice
  const itemText = `${productName} - $${productPrice}`;

  let itemText = 0;

  const listItem = document.createElement('li');
  listItem.textContent = itemText;
  list.appendChild(listItem);
}

// step 6:
totalBox.textContent = 'Total: $' + total.toFixed(2);

</script>

```

**Project: Top 5 Searches**

In this project we'll display the top 5 most recent searches. 

We need to:
- Display the top 5 most recent searches made by a user.
- Remove last old search result if they exceed 5 to keep the number as such.

Steps:
  - Add current search term to the start of the array. We can retrieve it with searchInput.value.
  - Remove value that's currently at the end of the array.

```html

<div class="output">
  <input type="text">
  <button>Search</button>
<ul></ul>
</div>

<script>
  const list = document.querySelector('.output ul');
  const searchInput = document.querySelector('.output input');
  const searchButton = document.querySelector('.output button');

  list.textContent = '';

  const myHistory = [];
  const maxHistory = 5;

  // send search term when input is empty
  function successSearch() {
    if (searchInput.value !== '') {
      myHistory.unshift(searchInput.value); // add search term to start of array

    // empty the unordered list so that we don't display duplicate entries
    // the display is regenerated every time a search term is entered.
    list.textContent = "";

    // loop through array and display all search terms in the list
    for (const itemText of myHistory) {
      const listItem = document.createElement('li');
      listItem.textContent = itemText; 
      list.appendChild(listItem);
      }
    }

    // if array length is 5 or more, remove oldest search term
    if (maxHistory.length >= maxHistory) {
      myHistory.pop();
    }

    // empty search input and focus on it, ready for next term to be entered
    searchInput.value = '';
    searchInput.focus();
  }

  // event listeners
  searchButton.addEventListener('click', successSearch);

</script>

```

### Conditions in Javascript (if...else)

We use conditional statements to determine what our logic should do in the event that a condition is true or if it's not.

```js

// basic syntax

if (condition) {
  // do something if condition is true
} else {
  // run other logic instead
}


// syntax without else: here the second else block isn't controlled by our coditional statement, hence it always runs whether condition is true or false. While it's correct syntax it can present unexpected outcomes therefore we want to always add condition of either true or false

if (condition) { // is true
  // do something
}

// while correct syntax: not recommended for use as it can easily get confusing
if (condition) // add code
else // add code


// example scenario
let shoppingDone = false;
let childsAllowanve;

if (shoppingDone === true) {
  childsAlllowance = 10;
} else {
  childsAllowance = 5;
}

```

**else...if**: We can additionally utilize this when we want to chain on additional choices with our if...else. 

Example: Simple weather app with recommendations for different weather conditions.

```html

<div class="output">
<label for="weather"> Please select todays weather condition: </label>
<select id="weather">
  <option value="">--Choose from one of the options below--</option>
  <option value="sunny">Sunny</option>
  <option value="rainy">Rainy</option>
  <option value="snowy">Snowy</option>
  <option value="overcast">Overcast</option>
</select>
<p class="message"></p>
</div>

<script>
  // variable selectors
  const selector = document.querySelector('select');
  const message = document.querySelector('p');

  // set weather function
  function setWeather() {
    // get selector value
    const choice = selector.value;

    // if..else optional conditions based on user choice
    if (choice === 'sunny') {
      message.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
    } else if (choice === 'rainy') {
      message.textContent = 'Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long.';
    } else if (choice === 'snowy') {
      message.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
    } else if (choice === 'overcast') {
      message.textContent = 'It is not raining, but the sky is grey and gloomy, it could turn any minute, so take a rain coat just in case.';
    } else {
      message.textContent = ''; // empty text from paragraph if nothing is selected
    }
  }

  // event listener
  selector.addEventListener('change', setWeather);
</script>

```

#### Logical Operators: AND, OR, NOT

We can utilize them to test multiple conditions without nesting if...else statements:

- &&: AND operator allows us to chain two or more expressions that all have to evaluate to true.
- ||: OR operator allows us to chain two or more expressions, only one or more of them have to evaluate to true.

```JS

// Logical AND operator example
if (choice === 'sunny' && temperature < 85) {
    message.textContent = `It is ${temperature} degrees outside, which is nice, we can go out to the park`;
} else if (choice === 'snowy' && temperature <= 35) {
  message.textContent = `It is ${temperature} degrees outside, which is very cold, we cannot go outside`;
}

// Logical OR operator example
if (choice === 'rainy' || temperature <= 30) {
  message.textContent = `It is ${temperature} degress outside which is really cold to go outside`;
} else if (choice === 'snowy' || temperature <= 10) {
  message.textContent = `It is ${temperature} degrees outside which it extremely cold to even think about stepping outside`;
}

```

#### Switch statements

We can utilize switch statements as they are good in case of the following:

- When we just want to set a variable to a certain choice of value.
- Print out a particular statement depending on a condition.

Switch statements take in a single expression/value as an input and look through several choices until they find one that matches that value hence executing code that goes with it.

```JS

switch (expression) {
  case choice1:
    // run code
    break;
  case choice2:
    // run code
    break;
  
  // include as many cases as we'd like

  default:
    // runs if none of the above choices match
    break;
}

```

**Switch Statement Example**: Weather App

- A user can select a weather option.
- Based on a user's weather option selected a message is shown.

```HTML

<div class="output">
<label for="weather"> Please select todays weather condition: </label>
<select id="weather">
  <option value="">--Choose from one of the options below--</option>
  <option value="sunny">Sunny</option>
  <option value="rainy">Rainy</option>
  <option value="snowy">Snowy</option>
  <option value="overcast">Overcast</option>
</select>
<p class="message"></p>
</div>

<script>

// variable selectors
const selector = document.querySelector('select');
const message = document.querySelector('p');

function setWeather () {
  const userChoiceSelection = selector.value;

  switch (choice) {
    case 'sunny':
      message.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
      break;
    case 'rainy':
      message.textContent = 'Rain is falling outside; take a rain coat and an umbrella, and do not stay out for too long.';
      break;
    case 'snowing':
      message.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
      break;
    case 'overcast':
      message.textContent = 'It is not raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
      break;
    default:
      message.textContent = '';
  }

}

// event listener
selector.addEventListener('change', setWeather);

</script>

```

#### Ternary Operator

It's used to test a condition and returns one value if it's true and another if it's false. It can be useful in some situations and takes up a lot less code than an `if...else` block if we have two choices that are chosen with a true/false condition.

Example pseudo code:

`condition ? run this code if true : run this code if false`

Example:

```js
// if isBirthday is true we give a happy birthday message otherwise if it's not we give standard greeting
const greetings = isBirthday ? 'Happy Birthday Jones cheers' : 'Goodmorning Jones!';

```

Ternary operator can:
- Set variable values.
- Run functions and anything we'd like.

**Project 1**: Two color choices with ternary operator
- User selects from two color choices that update the background color.

```HTML

<label for="theme">Select theme: </label>
<select id="theme">
  <option value="white">White</option>
  <option value="black">Black</option>
</select>
<h2>This is a website</h2>

<script>
  // add variables
  const selector = document.querySelector('select');
  const html = document.querySelector('html');
  document.body.style.padding = '10px';

  function updateColor(bgColor, textColor) {
    html.style.backgroundColor = bgColor;
    html.style.color = textColor;
  }
  
  // ternary logic for color change
  select.addEventListener('change', () => {
    select.value === 'black'
      ? updateColor('black', 'white')
      : updateColor('white', 'black')
  })
</script>

```

**Project 2**: Multiple colour choices with switch statement
- User selects from multiple color choices that update the background color.

```html

<div class="container">
<label for="theme">Select an option: </label>
<select id="theme">
  <option value="white">White</option>
  <option value="black">Black</option>
</select>
</div>

<script>
  const select = document.querySelector('select');
  const html = document.querySelector('.output');

  function updateColor(bgColor, textColor) {
    html.style.backgroundColor = bgColor;
    html.style.backgroundColor = textColor;
  }

  select.addEventListener('change', () => {
    const choice = select.value;

    switch(choice) {
      case 'black':
        update('black', 'white');
        break;
      case 'white':
        update('white', 'black');
        break;
      case 'purple':
        update('purple', 'white');
        break;
      case 'yellow':
        update('yellow', 'purple');
        break;
      case 'psychedelic':
        update('lime', 'purple');
        break;
    }
  });


</script>

```

## Looping code

Computers excel greatly at completing repetitive tasks.

**map() and filter()**:

We utilize these more specialized loops for collections in JS. 

**map()**: We can do something to each item in a collection and create a new collection containing the changed items:

```JS

// function to turn strings to uppercase
function toUpper(string) {
  return string.toUpperCase();
}

const cats = ["Leopard", "Tiger", "Lion", "Cheetah", "Jaguar"];

const upperCaseCats = cats.map(toUpper);

console.log(upperCaseCats);
// ["LEOPARD", "TIGER", "LION", "CHEETAH", "JAGUAR"]

```

**filter()**: We can use filter to test each item in a collection and create a new collection that contains only items that match:

```JS

function returnFirstLetter(cat) {
  return cat.startsWith('L');
}

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const filtered = cats.filter(returnFirstLetter);

console.log(filtered);
// [ "Leopard", "Lion" ]

```

**For Loop**

We utilize for loops to run through a given condition a set number of times.

```JS

// Initializer: Variable usually set as a number that's incremented  everytime the loop runs. Known as counter variable.
// Condition: Expression that defines when a loop should stop running that features a comparison expression to see if exit condition is met.
// Final expression: Exaluated when the loop goes through full evaluation, it's either an incrementer or decrementor to the counter variable that brings it closer to where the condition isn't true.
// Curly braces contain our code that runs each time the loop iterates.

for (initializer; condition ; final exression) {
  // logic
}

// example

const result = document.querySelector('.result');

for (let i = 1; i < 10; i++) {
  
}


// Calculating the squares of numbers from 1 to 9

const results = document.querySelector('#result');

function calculateSquares() {
  
  for (let i = 1; i < 10; i++) {
    const newResult = `${i} x ${i} = ${i x i}`; // calculare square of current value of i and express the calculation as a string with the result and add it to the output text. Add line break so that next string begins on a new line.
    /* 
    
    1. During first iteration i = 1, so we add 1 x 1 = 1.
    2. During second iteration, i = 2, so we add 2 x 2 = 4.
    3. And so on... for the rest of the numbers up to 9
    4. When i is equal to 10, loop stops and we move to next line of code that prints Finished! message on a new line
    */
    results.textContent += `${newResult}\n`;
  }
  results.textContent += "\nFinished!\n\n";
}

const calculateBtn = document.querySelector('#calculate');
const clearBtn = document.querySelector('#clear');

calculateBtn.addEventListener('click', calculateSquare);
clearBtn.addEventListener('click', () => (results.textContent = ""));

```

**Looping through collections with a for loop**

We can use a for...loop to loop through a collection instead of a for..of loop.

```JS

const cats = ['Leopard', 'Jaguar', 'Cheetah', 'Caracal', 'Lion', 'Serval'];

for (let i = 0; i < cats.length; i++) {
  console.log(cats[i]);
}

// 1. We are starting i at 0 and stopping when it reaches the length of the array.
// 2. We utilize i to access each item in the array.

/* 

There is a high potential for introducing bugs: 
1. We could start i at 1 forgetting that the first array index starts at 0.
2. We could end our loop at i <=cats.length forgetting that the last item in the array is cats.length - 1.

It's therefore better to user for..of loop as below:

*/

const cats = ['Kitty', 'Cat', 'Kitten', 'Catty'];

let myFavoriteCats = 'My favorite cats are called ';

for (const cat of cats) {
  myFavoriteCats += `${cat}, `;
}

console.log(myFavoriteCats) // My favorite cats are called Kitty, Cat, Kitten, Catty

// However, we need to handle our last item in the loop and add a full stop. We can user a for...loop for it

const wildCats = ['Lion', 'Jaguar', 'Cheetah', 'Tiger'];

let myFavoriteWildCats = 'My favorite wild cats are called ';

// for loop to list all wildCats
for (let i = 0; i < wildCats.length; i++) {
  // when we reach the end of our array items
  if (i === wildCats.length - 1) {
    // handle last item in the array differently
    myFavoriteWildCats += `and ${wildCats[i]}.`;
  } else {
    myFavoriteWildCats += `${wildCats[i]}, `;
  }
}

console.log(myFavoriteWildCats); // My favorite wild cats are called Lion, Jaguar, Cheetah, and Tiger.

```

### Exiting loops with a break

If we want to exit a loop before all iterations have been run through we can use a break statement.

Just like we have it in switch statements we can also use the `break` statement in loops to immediately exit loops and make the browser move on to any code that follows.

```html

<!-- Our simple application below searches through an array of contacts with phone numbers and returns only the one we search for -->

<label for="search">Search contact name: </label>
<input id="search" type="text">
<button>Search<button>

<p></p>

<script>

// initialize contacts
const contacts = [
  'John: 77754334',
  'Mary: 48524578',
  'Suzan: 47205845',
  'Wikins: 58357382'
];

const paragraph = document.querySelector('p');
const input = document.querySelector('input');
const btn = document.querySelector('button');

function searchName() {
  const searchNameInput = input.value.toLowerCase();
  input.value = '';
  input.focus();
  paragraph.textContent = '';
  for (const contact of contacts) {
    const splitContact = contact.split(':'); // split array items by semi-colon
    if (splitContact[0].toLowerCase() === searchName){
      paragraph.textContent = `${splitContact[0]}'s number ${splitContact[1]}.`;
      break;
    }
  }
  if (paragraph.textContent === "") {
    paragraph.textContent = "Contact not found.";
  }
}

btn.addEventListener('click', searchName);

/*

Code Walkthrough
1. We have an array of contact information as a string with each item having a name and phone number separated by a colon.
2. We have a function searchName that contains our logic for retrieving a single phone contact.
3. We store user input into a variable searchNameInput before emptying the text input and focusing it again, ready for the next user search term. toLowerCase() method is to ensure that searches will be case sensitive.
4. Inside our for...of loop we first split our contacts from the colon and store result in splitContact variable.
5. We use if conditional statement to test whether splitContact[0] (lower cased contact name is equal to user input searchName). If it is we enter a string into the paragraph to report what the contact's number is and we use `break` to end the loop.
6. After the loop we check whether we set a contact and if not we set paragraph text to 'Contact Not Found'.


*/

<script>

```

### Skipping iterations with continue

`continue` statement works similar to `break` but instead of breaking the loop entirely it skips to the next iteration of the loop.

```html

<!-- App: Takes a number as an input and returns only numbers that are squares of integers (whole numbers) -->

<label for="number"> Enter number: </label>
<input id="number" type="number" />
<button>Generate integer squares</button>
<p>Output:</p>

<script> 

const paragraph = document.querySelector('p');
const input = document.querySelector('input');
const btn = document.querySelector('button');

function squareRoot () {
  paragraph.textContent = "Output: ;
  const number = input.value;
  input.value = "";
  input.focus();
  for(let i = 1; i <= number; i++) {
    let squareRoot = Math.sqrt(i); // return square root of i
    if (Math.floor(squareRoot) !== squareRoot) {
      continue;
    }
    paragraph.textContent += `${i} `;
  }
}

btn.addEventListener('click', squareRoot);

/*
**Script Walkthrough**

1. User input should be a number (number). For...loop is given a counter starting at 1 (we aren't interested in 0 in this case), an exit condition that says the loop will stop when the counter  becomes bigger than the input (number), and an interator that adds 1 to the counter each time.
2. In the loop, we find the square root of each number using static method Math.sqrt(i), then check whether the square root is an integer by testing whether it is the same as itself when it has been rounded down to the nearest integer (this is what Math.floor()) does to the number it is passed.


*/

</script>


```


 
### Javascript commands

Below is a list of most utilized javascript commands as a helpful reference with descriptions.

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

/***Event Listeners***/
element.addEventListener('click', function); // attaches a click event listener to an element that makes a function call when fired

/***JSON Methods***/
JSON.stringify(obj); // converts a javascript object into a JSON string
JSON.parse(jsonStr); // parses a JSON string into a javascript object

/***Asynchronous Operations***/
fetch(url)
  .then(response => response.json()); // performs network request and returns a promise
  .then(data => console.log(data));
  .catch(error => console.error(error)); // catches errors during fetch process

async function fetchData() {
  // asynchronous function declaration
  try {
    let response = await fectch(url); // waits for fetch to complete
    let data = await response.json(); // waits for respnse to be parsed
    console.log(data); // logs data to console
  } catch (error) {
    console.error(error); // catches and logs any errors in the request
  }
}

// Error Handling

try {
  // attempt to execute code that may throw an error
} catch (error) {
  // handles any errors
  console.error(error); // logs any errors to the console
} finally {
  // executes code after try and catch regardless of result
}

/***Date and Time Methods***/
let now = new Date(); // creates new Date object representing current date and time
now.getFullYear(); // gets four digit current year
now.getMonth(); // gets current month (0 - 11) Jan - Dec
now.getDate(); // gets date of the month (1 - 31)
now.getHours(); // gets hours (0 - 23)
now.getMinutes(); // gets minutes (0 - 59)
now.getSeconds(); // gets seconds (0 - 59)

/***Javascript Class***/
class Person {
  constructor(name, age) { // initialize object
    this.name = name;
    this.age = age;
  }

  greet() { // method to greet
    console.log(`Hello my name is ${this.name} and I am ${this.age} years old.`);
  }
}

/***Module Imports and Exports***/
export const myFunction = () => { /* ... */ } // exports function from a module
import { myFunction } from './myModule'; // imports function from module

```