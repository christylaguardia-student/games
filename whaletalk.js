// var input = document.getElementById('userInput').value;

function playGame() {
  var input = prompt('Enter your message to translate into whale talk.');
  var vowels = ['a','e','i','o','u'];
  var resultsArray = [];

  for (var i = 0; i < input.length; i++) {

    for (var j = 0; j < vowels.length; j++) {
      if (input[i] === vowels[j]) {
        resultsArray.push(input[i]);
      }
    }

    if (input[i] === 'e' || input[i] === 'u') {
      resultsArray.push(input[i]);
    }
  }

  var translation = resultsArray.join('').toUpperCase();
  document.getElementById('userInput').textContent = input;
  document.getElementById('results').textContent = translation;

  console.log(input);
  console.log(translation);
}
