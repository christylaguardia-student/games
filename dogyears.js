// var myAge = document.getElementById('userAge').value;
function playGame(){
  var myAge = prompt('What is your age in human years?');
  var firstYears = (2 * 10.5);
  var laterYears = (myAge - 2) * 4;
  var myAgeInDogYears = firstYears + laterYears;
  console.log('Your age in human years is ' + myAge);
  console.log('Your age in dog years is ' + myAgeInDogYears);
  document.getElementById('results').textContent = 'You are ' + myAgeInDogYears + ' years old in dog years.';
}
