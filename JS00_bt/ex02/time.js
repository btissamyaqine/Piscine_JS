const month = 7;
let day = 13;

const timeWarp = (newMonth, newDay) => {
  day = newDay;
  console.log(newMonth, day);
}

timeWarp(5, 10);
timeWarp(11, 20);