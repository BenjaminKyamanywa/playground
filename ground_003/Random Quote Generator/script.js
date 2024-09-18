// initialize element variables
const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');
const errorMessage = document.getElementById('error-message');


let apiQuotes = [];

// show loading spinner
const showLoadingSpinner = () => {
  loader.hidden = false;
  quoteContainer.hidden = true;
  errorMessage.hidden = true;
}

// remove loading spinner
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
