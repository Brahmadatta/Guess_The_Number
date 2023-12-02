'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Hurrah you win 🏆 !!!';

// document.querySelector('.number').textContent = 13;

// document.querySelector('.score').textContent = 10;

// console.log((document.querySelector('.guess').value = 6));

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    //document.querySelector('.message').textContent = 'Enter Valid Number 🛑';
    displayMessage('Enter Valid Number 🛑');
    //when player wins
  } else if (guess === secretNumber) {
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('.number').style.width = '30rem';
    // document.querySelector('.message').textContent =
    //   'Hurrah You Guessed it right 🏆';
    displayMessage('Hurrah You Guessed it right 🏆');
    document.querySelector('.guess').value = '';
    document.querySelector('.score').value = score;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    //when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      //     guess > secretNumber ? 'Too High!!!' : 'Too Low!!!';
      displayMessage(guess > secretNumber ? 'Too High!!!' : 'Too Low!!!');
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('body').style.backgroundColor = '#f40404';
    } else {
      //   document.querySelector('.message').textContent = 'You lost the game!!!';
      displayMessage('You lost the game!!!');

      document.querySelector('.score').textContent = 0;
      document.querySelector('.number').textContent = '🙁';
      document.querySelector('.number').style.width = '30rem';
    }
  }
  //when guess is too high
  //   else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '⬆️ Too High!!!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You lost the game!!!';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //     //when guess is too low
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '⬇️ Too Low!!!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You lost the game!!!';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

//excercise
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  //   document.querySelector('.message').textContent = 'start guessing...';
  displayMessage('start guessing...');
});
