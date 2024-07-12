let random = parseInt(Math.random() * 100 + 1);

const userInput = document.querySelector(`#guessField`);
const startOver = document.querySelector(`.resultParas`);
const submit = document.querySelector(`#subt`);
const guessSlot = document.querySelector(`.guesses`);
const remaining = document.querySelector(`.lastResult`);
const loworHigh = document.querySelector(`.lowOrHi`);
let p = document.createElement(`p`);

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener(`click`, (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  // Here we are validating the guess which was given by user
  if (isNaN(guess)) {
    alert(`Please Enter a valid Number!`);
  } else if (guess < 1) {
    alert(`Please Enter a number greater than 1!`);
  } else if (guess > 100) {
    alert(`Please Enter a number less than 100!`);
  } else {
    prevGuess.push(guess);
    console.log(prevGuess);
    if (numGuess > 10) {
      displayGuess(guess);
      displayMessage(`Game Over.Random number was ${random}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}
function checkGuess(guess) {
  // Here it checks the value will be equal,low or high
  if (guess === random) {
    displayMessage(`You guessed it right!`);
    endGame();
  } else if (guess < random) {
    displayMessage(`Number is Too Low`);
  } else if (guess > random) {
    displayMessage(`Number is Too High`);
  }
}
function displayGuess(guess) {
  // Here it cleans the value and updates the previous guess and guesses remaining.
  userInput.value = ``;
  guessSlot.innerHTML += `${guess} , `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}
function displayMessage(message) {
  // Here we displays the message to the webpage.
  loworHigh.innerHTML = `<h2>${message}</h2>`;
}
function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}
