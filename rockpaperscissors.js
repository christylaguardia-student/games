function getUserChoice(){
  var userInput = prompt('What is your selection?');
	userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput == 'bomb') {
    return userInput;
  } else {
    console.log('Invalid selection!');
  }
}

function getComputerChoice(){
  var computerInput = Math.floor(Math.random() * 3);
  switch (computerInput) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
                         }
}

function determineWinner(userChoice, computerChoice){
  if (userChoice === 'bomb') {
    return 'You won!';
  }

  if (userChoice === computerChoice) {
    return 'The game is a tie.';
  }

  if (userChoice === 'rock'){
    if (computerChoice === 'paper') {
      return 'The computer won.';
    } else {
      return 'You won!';
    }
  }

  if (userChoice ==='scissors') {
    if (computerChoice === 'rock'){
      return 'The computer won.';
    } else {
      return 'You won!';
    }
  }

  if (userChoice === 'paper') {
   if (computerChoice === 'scissors'){
     return 'The computer won.';
   } else {
   	return 'You won!';
   }
  }
}

function playGame() {
  var userChoice = getUserChoice();
  var computerChoice = getComputerChoice();
  console.log('You: ' + userChoice);
  console.log('Computer: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));

  window.confirm('The computer chose ' + computerChoice + '. ' + determineWinner(userChoice, computerChoice));
}

// playGame();

function playGameRock() {
  var userChoice = 'rock'
  var computerChoice = getComputerChoice();
  var winner = determineWinner(userChoice, computerChoice);
  console.log('You: ' + userChoice);
  console.log('Computer: ' + computerChoice);
  document.getElementById('results').textContent = 'The computer chose ' + computerChoice + '. ' + winner;
}

function playGamePaper() {
  var userChoice = 'paper'
  var computerChoice = getComputerChoice();
  var winner = determineWinner(userChoice, computerChoice);
  console.log('You: ' + userChoice);
  console.log('Computer: ' + computerChoice);
  document.getElementById('results').textContent = 'The computer chose ' + computerChoice + '. ' + winner;
}

function playGameScissors() {
  var userChoice = 'scissors'
  var computerChoice = getComputerChoice();
  var winner = determineWinner(userChoice, computerChoice);
  console.log('You: ' + userChoice);
  console.log('Computer: ' + computerChoice);
  document.getElementById('results').textContent = 'The computer chose ' + computerChoice + '. ' + winner;
}
