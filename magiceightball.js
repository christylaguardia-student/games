var userQuestion = document.getElementById('userQuestion').value;

function getAnswer() {
  var randomNumber = Math.floor(Math.random() * 7);
  switch (randomNumber) {
    case 0:
      return 'It is certain';
      break;
    case 1:
      return 'It is decidedly so';
      break;
    case 3:
      return 'Reply hazy try again';
      break;
    case 4:
      return 'Cannot predict now';
      break;
    case 5:
      return 'Don\'t count on it';
      break;
    case 6:
      return 'My sources say no';
      break;
    case 7:
      return 'Outlook not so good';
      break;
    default:
      return 'I have my doubts';
    }
}

function playGame() {
  var ballAnswer = getAnswer();
  console.log(userQuestion);
  console.log(ballAnswer);
  document.getElementById('gameResults').textContent = 'The Ball says: ' + ballAnswer;
}
