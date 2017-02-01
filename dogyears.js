var myAge = document.getElementById('userAge').value;
var firstYears = (2 * 10.5);
var laterYears = (myAge - 2) * 4;
var myAgeInDogYears = firstYears + laterYears;

function playGame(){
  console.log('Your age in human years is ' + myAge);
  console.log('Your age in dog years is ' + myAgeInDogYears);
  document.getElementById('gameResults').textContent = 'You are ' + myAgeInDogYears + ' years old in dog years.';
}
