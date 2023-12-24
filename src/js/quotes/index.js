import ApiService from '../api-service/index.js';

const quoteEl = document.getElementById('daily-quote'),
  quoteAuthorEl = document.getElementById('quote-author');

async function fetchNewQuote() {
  try {
    const fetch = new ApiService();
    const data = await fetch.fetchQuote();
    const storageData = {
      date: new Date().toDateString(),
      quote: data.quote,
      author: data.author,
    };

    localStorage.setItem('quoteData', JSON.stringify(storageData));

    return storageData;
  } catch (error) {
    console.error('Error fetching quote:', error.message);
  }
}

const currentLocalData = localStorage.getItem('quoteData')
  ? JSON.parse(localStorage.getItem('quoteData'))
  : '';

if (currentLocalData && new Date().toDateString() === currentLocalData.date) {
  quoteEl.textContent = currentLocalData.quote;
  quoteAuthorEl.textContent = currentLocalData.author;
} else {
  fetchNewQuote()
    .then(({ quote, author }) => {
      quoteEl.textContent = quote;
      quoteAuthorEl.textContent = author;
    })
    .catch(err => console.log(err));
}
