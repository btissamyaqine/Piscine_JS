
interval = () => {
  return (2);
}

callback = (count) => {
  if (count)
    return (true) //returns true/false => to stop or continue the setTimer
  return (false) //returns true/false => to stop or continue the setTimer
}

setTimer = (callback, interval) => {
  inc = interval();
  while (inc) {
    console.log(callback(interval()));
    inc--;
  }
  // callback(interval());
}


setTimer(callback, interval);