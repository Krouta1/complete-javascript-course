'use strict';

// console.log(document.querySelector('.message').textContent);

//Lesson 72: Selecting and Manipulating Elements

// document.querySelector('.message').textContent = 'Correct Number! 🎉';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 23;

//Lesson 73: Handling Click Events
//Lesson 74: Implementing the Game Logic
//Lesson 78: Refactoring Our Code: The DRY Principle

//generate random number
let secreteNumber = Math.trunc(Math.random() * 20) + 1;

//state variable
let score = 20;

// high score
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // console.log(guess, typeof guess);
  //When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = 'No number!';
    displayMessage('No number!');
  } else if (guess === secreteNumber) {
    //When player wins
    //document.querySelector('.message').textContent = 'Correct Number! 🎉';
    displayMessage('Correct Number! 🎉');
    document.querySelector('.number').textContent = secreteNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secreteNumber) {
    //when guess is wrong
    if (score > 1) {
      //When score is greater than 1
      // document.querySelector('.message').textContent =
      //   guess > secreteNumber ? 'Too High! 📈' : 'Too Low! 📉';
      displayMessage(guess > secreteNumber ? 'Too High! 📈' : 'Too Low! 📉');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //document.querySelector('.message').textContent = 'You lost the game! 😭';
      displayMessage('You lost the game! 😭');
      document.querySelector('.score').textContent = 0;
    }
  }
  // } else if (guess > secreteNumber) {
  //   //When guess is too high
  //   if (score > 1) {
  //     //When score is greater than 1
  //     document.querySelector('.message').textContent = 'Too High! 📈';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game! 😭';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // } else if (guess < secreteNumber) {
  //   //When guess is too low
  //   if (score > 1) {
  //     //When score is greater than 1
  //     document.querySelector('.message').textContent = 'Too Low! 📉';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game! 😭';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

//Lesson 75: Implementing Reset Functionality

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secreteNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
