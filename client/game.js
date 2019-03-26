var numGuesses = 0;

const generateNumber = require('./generateNumber');
var secretNumber = generateNumber();

var guessForm = document.getElementById('guessForm');

var feedback = document.getElementById('feedback');

const createAndShowWinnerForm = require('./createAndShowWinnerForm');

guessForm.addEventListener('submit', submitEvent => {
  submitEvent.preventDefault();

  feedback.innerText = '';

  const input = submitEvent.target.guess;
  const guess = Number(input.value);

  input.value = '';

  if (Number.isNaN(guess)) {
    feedback.innerText = 'Oops! Make sure to enter a number using only digits.';
  } else {
    numGuesses = numGuesses + 1;
    if (guess === secretNumber) {
      feedback.innerText =
        'You got it! Enter your name below to be added to our list of winners.';
      createAndShowWinnerForm(numGuesses);
    } else if (guess < secretNumber) {
      feedback.innerText = 'Too low! Keep guessing!';
    } else {
      feedback.innerText = 'Too high! Keep guessing!';
    }
  }
});
