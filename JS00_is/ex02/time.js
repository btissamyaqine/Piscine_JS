const month = "July";
let day = "13th";

const timeWarp = (newMonth, newDay) => {
  day = newDay
  console.log(newMonth, day);
}

timeWarp(5, 10);
timeWarp(11, 20);