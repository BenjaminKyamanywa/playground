# 📃 Building a random quote generator

In this project we are going to explore utilization of a third party API that generates quotes and users will get a random quote each time. We'll utilize `async` with `try` and `catch` and understand their roles and implementation.

## Topics
- [Markup Overview](#markup-overview)
- [CSS Highlights](#css-highlights)
- [Uncovering our JS](#uncovering-our-js)
- [Key Take Aways](#key-take-aways)
- [Conclusion](#conclusion)

### Markup Overview

___

Here we set up our structure for the markup. We use id's on our div elements that we shall later add interactivity with Javascript.

```HTML

    <div class="quote-container" id="quote-container">
    <!-- Error Message -->
    <div class="error-message" id="error-message"></div>
      <!-- Quote -->
       <div class="quote-text">
        <!-- TODO: Add Ion Icon opening quote icon -->
        <span id="quote"></span>
       </div>
       <!-- Author -->
        <div class="quote-author">
          <span id="author"></span>
        </div>
        <!-- Buttons -->
         <div class="button-container">
          <button class="twitter-button" id="twitter" title="Tweet Me!">
            <ion-icon name="logo-twitter"></ion-icon>
          </button>
          <button id="new-quote">Generate Quote</button>
         </div>
    </div>
    <!-- Content loader -->
    <div class="loader" id="loader"></div>

```

- `<div id="quote-container">`: Contains all elements of our quote module.
- `<div id="quote-text">`: Displays the random generated quotes.
- `<button id="new-quote">`: Triggers a new quote each time a user clicks on it.

### CSS Highlights

___

We'll go over our key styles.


```CSS

.quote-container {
  max-width: 900px;
  width: 100%;
  padding: 20px 30px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.4);
  box-shadow: 0 10px 10px 10px rgba(0, 0, 0, 0.2);
}

button {
  cursor: pointer;
  font-size: 1.2rem;
  height: 2.5rem;
  border: none;
  border-radius: 10px;
  color: #fff;
  background: #333;
  outline: none;
  padding: 0.5rem 1.8rem;
  box-shadow: 0 0.3rem rgba(121, 121, 121, 0.65);
}

button:hover {
  filter: brightness(120%);
}

button:active {
  transform: translate(0, 0.3rem);
  box-shadow: 0 0.1rem rgba(255, 255, 255, 0.65);
}

```

- `.quote-container`: Provides our module with styling to display it in the center of the browser.
- `button` `button:hover` `button:active`: Ensures consistent styling for our buttons.

### Uncovering our JS

___

We'll uncover in depth our Javascript with utilisation of our functions.

```JS

// initialize element variables
const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');
const errorMessage = document.getElementById('error-message');


let apiQuotes = [];

const showLoadingSpinner = () => {
  loader.hidden = false;
  quoteContainer.hidden = true;
  errorMessage.hidden = true;
}

const removeLoadingSpinner = () => {
  loader.hidden = true;
  quoteContainer.hidden = false;
}

// show new Quote 
const newQuote = () => {
  // show loader
  showLoadingSpinner();
  // pick random quote from quotes array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

  // check if author field is blank and replace with 'Unknown' text
  if (!quote.author) {
    authorText.textContent = 'Unknown';
  } else {
    authorText.textContent = quote.author;
  }

  // reduce font size for long quotes
  if (quote.text.length > 40) {
    quoteText.classList.add('long-quote');
  } else {
    quoteText.classList.remove('long-quote');
  }

  // set quote, hide loader
  quoteText.textContent = quote.text;
  removeLoadingSpinner();
}

```

- `showLoadingSpinner`: Displays a loading spinner and hides the quote container while data is being fetched.
- `removeLoadingSpinner`: Hides the loading spinner and displays the quote container once data is successfully loaded.
- `newQuote`: Selects a random quote from the `apiQuotes` array and updates the `quoteText` and `authorText` elements with the quote's content. Adjusts the font size of the quote text if it’s too long and also manages the visibility of the loading spinner.


```JS

// Get quotes from API
const getQuotes = async () => {
  // show loader
  showLoadingSpinner();
  // add URL for our API call 'https://jacintodesign.github.io/quotes-api/data/quotes.json'
  const apiURL = 'https://type.fit/api/quotes';

  try {
    const response = await fetch(apiURL);
    // check if response is not okay
    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }

    apiQuotes = await response.json();
    newQuote();

  } catch (error) {
    // Catch error and display error message
    errorMessage.hidden = false;
    errorMessage.textContent = `Failed to load quotes: ${error.message}. Please try again later.`;
    removeLoadingSpinner();
  }
}

```

- `getQuotes`: Fetches data from an external API asynchronously using the fetch API.
- Handles errors gracefully by displaying an error message if the API call fails.

```JS

// Tweet Quote
const tweetQuote = () => {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, '_blank');
}

// Event listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

// call getQuotes function on page load
getQuotes();

```

- `tweetQuote`: Constructs a URL to open Twitter with a pre-filled tweet containing the current quote and author.
- Opens this URL in a new browser tab for the user to tweet the quote.
- Event listeners are attached to buttons so that specific functions (`newQuote` and `tweetQuote`) are triggered when the buttons are clicked.


#### Usage of Javascript `async`, `try`, `catch`

---

- `async` usage:
    - Tells JavaScript a function will perform tasks that take time (like fetching data) without blocking other code.
    - It's used with the `getQuotes` and tells JavaScript that the function will include asynchronous operations, such as making a network request to get quotes from an external API.
- `fetch` usage:
    - We use it to make HTTP requests (like asking a server for data). It’s how we get data from the internet in a web application.
    - It's used in the `getQuotes` function to request quote data from an API. The API is like a service on the web that provides the quotes.
- `try` and `catch` usage:
    - A safety net for handling errors. `try` attempts an operation, and `catch` deals with any problems that occur during that attempt.
    - Inside `getQuotes` function, `try` is used to attempt to fetch quotes from the API. If something goes wrong during this process (like a network issue), the `catch` block catches the error and allows us to handle it (for example, by showing an error message).

### Key Take Aways
___

1. Efficient DOM Access:
    - Cache references to DOM elements to optimize performance.

2. Dynamic Content Handling:
    - We use JavaScript to update content dynamically based on user actions or data changes.

3. User Experience:
    - We manage loading states and provide feedback during asynchronous operations to enhance user satisfaction.

4. External Interactions:
    - Use JavaScript to facilitate interactions with external services (e.g., Twitter), enhancing functionality and user engagement.

### Conclusion
___

In this article, we explored a practical example of building a random quote generator using HTML, CSS, and JavaScript. We focused on several key JavaScript concepts: async, fetch, and try/catch.

Learning these concepts helps us build more robust and interactive web applications. We gain the ability to handle asynchronous tasks, manage errors effectively, and integrate external data seamlessly.

Remember, with these tools and dedicated practice, we can create amazing apps on the web!

You can view the project on Codepen [Here](https://codepen.io/benjaminkyamanywa/pen/WNqEZrq). 
