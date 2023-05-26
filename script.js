'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

//with this function, you dont need to inout all the code, just the variable name
// = message >>>> (message)
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //When there is no input
  if (!guess) {
    displayMessage('No number 🥹'); // HERE function is called with the string

    //When the player wins
  } else if (guess === secretNumber) {
    displayMessage('Correct Number 👀');
    document.querySelector('.number ').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b346';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //When guess is wrong.
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!😅' : 'Too low!😅');
      score--;
      displayScore(score);
    } else {
      document.querySelector('.message').textContent = 'You LOSE! 😈';
      displayScore(0);
    }
  }

  //RESET THE GAME TO START IF PLAYER CLICKS AGAIN!
  document.querySelector('.again').addEventListener('click', function () {
    const restart = (document.querySelector('body').style.backgroundColor =
      '#222');
    displayMessage('Start guessing...');
    document.querySelector('.guess').value = ' ';
    displayScore(20);
    document.querySelector('.number').textContent = '?';
    secretNumber = Math.trunc(Math.random() * 20) + 1;
  });
});
