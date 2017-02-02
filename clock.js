function displayTime() {
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  var meridiem = "AM";

  // add leading zeros
  if (hours < 10) {
    hours = "0" + hours;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  // change to 12 hour instead of 24 hour
  if (hours > 12) {
    hours = hours - 12;
    meridiem = "PM";
  }

  // 0 hour is 12 AM or PM
  if (hours === 0) {
    hours = hours - 12;
  }

  var clock = document.getElementById('clockResults');

  clockResults.innerText = hours + ":" + minutes + ":" + seconds +" " + meridiem;
}

// displayTime();

function displayDate() {
  var currentDate = new Date();
  var dayWeek = currentDate.getDay();
  var day = currentDate.getDate();
  var month = currentDate.getMonth();
  var year = currentDate.getFullYear();

  // get day of week
  var dayArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  // get month
  var monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  var date = document.getElementById('dateResults');

  dateResults.innerText = dayArray[dayWeek] + ', ' + monthArray[month] + ' ' + day + ', ' + year;

}

function displayDateTime() {
  displayDate();
  displayTime();
}
