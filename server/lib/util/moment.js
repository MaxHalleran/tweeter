const myMoment = function myMoment(time) {
  let returnTime = (Date.now() - time) / 1000;
  let timeStamp = {
    year: 0,
    month: 0,
    day: 0,
    hour: 0,
    minute: 0,
    second: 0,
  }

  while(returnTime > 31104000) {
    timeStamp.year += 1;
    returnTime -= 31104000;
  }

  while(returnTime > 2592000) {
    timeStamp.month += 1;
    returnTime -= 2592000;
  }

  while(returnTime > 86400) {
    timeStamp.day += 1;
    returnTime -= 86400;
  }

  while(returnTime > 3600) {
    timeStamp.hour += 1;
    returnTime -= 3600;
  }

  while(returnTime > 60) {
    timeStamp.minute += 1;
    returnTime -= 60;
  }

  while(returnTime > 1) {
    timeStamp.second += 1;
    returnTime -= 1;
  }

  return timeStamp;
}

// a 13 digit time calculator
console.log('the current time is: ', Date.now());
console.log(myMoment(1536953780846));
console.log(myMoment(1536889614042));
console.log(myMoment(1461116232227));
