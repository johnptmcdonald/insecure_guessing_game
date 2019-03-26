module.exports = function createAndShowWinnerForm(numGuesses) {
  console.log(numGuesses)
  const winnerForm = document.createElement('form');
  winnerForm.method = 'POST';
  winnerForm.action = '/winners';

  const nameLabel = document.createElement('label');
  nameLabel.innerText = 'Your name:';

  const nameInput = document.createElement('input');
  nameInput.name = 'name';
  nameInput.autocomplete = false;

  const guessesLabel = document.createElement('label');
  guessesLabel.innerText = 'Number of guesses:';

  const guessesInput = document.createElement('input');
  guessesInput.name = 'guesses';
  guessesInput.value = numGuesses;
  guessesInput.readOnly = true;

  const submitButton = document.createElement('button');
  submitButton.type = 'submit';
  submitButton.innerText = 'Submit Name';

  winnerForm.appendChild(nameLabel);
  winnerForm.appendChild(nameInput);
  winnerForm.appendChild(guessesLabel);
  winnerForm.appendChild(guessesInput);
  winnerForm.appendChild(submitButton);

  document.body.appendChild(winnerForm);
}