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

function getQuestion() {
  var randomNumber = Math.floor(Math.random() * 7);
  switch (randomNumber) {
    case 0:
      return 'What your sign?';
      break;
    case 1:
      return 'How old are you?';
      break;
    case 3:
      return 'Are you LGBTQIA?';
      break;
    default:
      return 'You have many questions, yes?';
    }
}

function playGame() {
  var userQuestion = prompt("What question do you want to ask the Magic 8 Ball?");
  var ballQuestion = prompt(getQuestion());
  alert("Ahh...I see...");

  var ballAnswer = getAnswer();

  document.getElementById('userQuestion').textContent = userQuestion;
  document.getElementById('results').textContent = 'The Ball says "' + ballAnswer + '."';

  console.log(userQuestion);
  console.log(ballAnswer);
}
