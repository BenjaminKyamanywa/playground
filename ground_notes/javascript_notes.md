## 🛠️ Javascript Reference

In this Javascript reference guide are notes taken while learning Javascript|ECMAScript from the ground up with helpful links to provide guidance a long the journey.

## Helpful Links
  - MDN Docs: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/
  - Javascript Info: https://javascript.info/intro

## Topics
  - [Introduction](#introduction)
  - [Inline Javascript Handlers and Event handlers](#inline-javascript-handlers-and-event-handlers)
  - [Script Loading strategies](#sript-loading-strategies)

## Introduction

JavaScript is a programming language that allows us to implement complex functionalities on web pages and was initially created to “make web pages alive”. Today, JavaScript can execute not only in the browser, but also on the server, or actually on any device that has a special program called the [JavaScript engine](https://en.wikipedia.org/wiki/JavaScript_engine). The programs in Javascript are called scripts cause they can be written right in a web page’s HTML and run automatically as the page loads.

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

### What can it do:
- Store useful values inside variables.
- Perform operations on strings.
- Respond to events on a web page and run code.

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

## Comments
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

