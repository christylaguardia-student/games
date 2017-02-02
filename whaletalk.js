var input = document.getElementById('userInput').value;
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

function playGame() {
  var translation = resultsArray.join('').toUpperCase());
  document.getElementById('results').textContent = translation;
}
