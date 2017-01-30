function getFortune() {
  var randomNumber = Math.floor(Math.random() * 50);

  switch (randomNumber) {
    case 1:
      return 'Today it\'s up to you to create the peacefulness you long for.';
      break;
    case 2:
      return 'A friend asks only for your time not your money.';
      break;
    case 3:
      return 'If you refuse to accept anything but the best, you very often get it.';
      break;
    case 4:
      return 'A smile is your passport into the hearts of others.';
      break;
    case 5:
      return 'A good way to keep healthy is to eat more Chinese food.';
      break;
    case 6:
      return 'Your high-minded principles spell success.';
      break;
    case 7:
      return 'Hard work pays off in the future, laziness pays off now.';
      break;
    case 8:
      return 'Change can hurt, but it leads a path to something better.';
      break;
    case 9:
      return 'Enjoy the good luck a companion brings you.';
      break;
    case 10:
      return 'People are naturally attracted to you.';
      break;
    case 11:
      return 'Hidden in a valley beside an open stream- This will be the type of place where you will find your dream.';
      break;
    case 12:
      return 'A chance meeting opens new doors to success and friendship.';
      break;
    case 13:
      return 'You learn from your mistakes... You will learn a lot today.';
      break;
    case 14:
      return 'If you have something good in your life, don\'t let it go!';
      break;
    case 15:
      return 'What ever you\'re goal is in life, embrace it visualize it, and for it will be yours.';
      break;
    case 16:
      return 'Your shoes will make you happy today.';
      break;
    case 17:
      return 'You cannot love life until you live the life you love.';
      break;
    case 18:
      return 'Be on the lookout for coming events; They cast their shadows beforehand.';
      break;
    case 19:
      return 'Land is always on the mind of a flying bird.';
      break;
    case 20:
      return 'The man or woman you desire feels the same about you.';
      break;
    case 21:
      return 'Meeting adversity well is the source of your strength.';
      break;
    case 22:
      return 'A dream you have will come true.';
      break;
    case 23:
      return 'Our deeds determine us, as much as we determine our deeds.';
      break;
    case 24:
      return 'Never give up. You\'re not a failure if you don\'t give up.';
      break;
    case 25:
      return 'You will become great if you believe in yourself.';
      break;
    case 26:
      return 'There is no greater pleasure than seeing your loved ones prosper.';
      break;
    case 27:
      return 'You will marry your lover.';
      break;
    case 28:
      return 'A very attractive person has a message for you.';
      break;
    case 29:
      return 'You already know the answer to the questions lingering inside your head.';
      break;
    case 30:
      return 'It is now, and in this world, that we must live.';
      break;
    case 31:
      return 'You must try, or hate yourself for not trying.';
      break;
    case 32:
      return 'You can make your own happiness.';
      break;
    case 33:
      return 'The greatest risk is not taking one.';
      break;
    case 34:
      return 'The love of your life is stepping into your planet this summer.';
      break;
    case 35:
      return 'Love can last a lifetime, if you want it to.';
      break;
    case 36:
      return 'Adversity is the parent of virtue.';
      break;
    case 37:
      return 'Serious trouble will bypass you.';
      break;
    case 38:
      return 'A short stranger will soon enter your life with blessings to share.';
      break;
    case 39:
      return 'Now is the time to try something new.';
      break;
    case 40:
      return 'Wealth awaits you very soon.';
      break;
    case 41:
      return 'If you feel you are right, stand firmly by your convictions.';
      break;
    case 42:
      return 'If winter comes, can spring be far behind?';
      break;
    case 43:
      return 'Keep your eye out for someone special.';
      break;
    case 44:
      return 'You are very talented in many ways.';
      break;
    case 45:
      return 'A stranger, is a friend you have not spoken to yet.';
      break;
    case 46:
      return 'A new voyage will fill your life with untold memories.';
      break;
    case 47:
      return 'You will travel to many exotic places in your lifetime.';
      break;
    case 48:
      return 'Your ability for accomplishment will follow with success.';
      break;
    case 49:
      return 'Nothing astonishes men so much as common sense and plain dealing.';
      break;
    case 50:
      return 'Its amazing how much good you can do if you dont care who gets the credit.';
      break;
    default:
      return 'It\'s better to be alone sometimes.'
  }
}

function playGame() {
  var results = getFortune();
  document.getElementById('results').textContent = results;
}
