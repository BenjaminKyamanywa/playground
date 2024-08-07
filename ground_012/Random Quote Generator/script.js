// initialize element variables
const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');



let apiQuotes = [];

// show new Quote 
const newQuote = () => {
  // pick random quote from quotes array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
}

// Get quotes from API
const getQuotes = async = async () => {
  // add URL for our API call 'https://jacintodesign.github.io/quotes-api/data/quotes.json'
  const apiURL = 'https://type.fit/api/quotes';

  try {
    const response = await fetch(apiURL);
    apiQuotes = await response.json();
    newQuote();

  } catch (error) {
    // Catch error 
  }
}

// call getQuotes function on page load
getQuotes();