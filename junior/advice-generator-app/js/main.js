// get dynamic data from the DOM
const advideId = document.querySelector('#advideId');
const quotes = document.querySelector('#quotes');

// get dynamic data from API (Advice Slip JSON API)

function getQuotes() {
  fetch('https://api.adviceslip.com/advice')
    .then((response) => response.json())
    .then((data) => {
      advideId.innerHTML = data.slip.id;
      quotes.innerHTML = data.slip.advice;
    })
    .catch((error) => {
      console.log(error);
    });
}
