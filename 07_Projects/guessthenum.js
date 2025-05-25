let randnum = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');
let prevGuess = [];
let num_of_guess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener('click', (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  //validation of guesses
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('Please enter a number greater than 1');
  } else if (guess > 100) {
    alert('Please enter a number greater than 100');
  } else {
    prevGuess.push(guess);
    if (num_of_guess === 11) {
      displayMessage(`Game Over.Random number was ${randnum}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  //message print
  if (guess === randnum) {
    displayMessage(`You guessed correct`);
    endGame();
  } else if (guess < randnum) {
    displayMessage(`Number is too low`);
  } else if (guess > randnum) {
    displayMessage(`Number is too high`);
  }
}
function displayGuess(guess) {
  //
  userInput.value = '';
  guessSlot.innerHTML += `${guess} , `;
  num_of_guess++;
  remaining.innerHTML = `${11 - num_of_guess}`;
}
function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  //Endgame
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  playGame = false;
  startOver.appendChild(p);
}

function newGame() {
  //
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randnum = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    num_of_guess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - num_of_guess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}


