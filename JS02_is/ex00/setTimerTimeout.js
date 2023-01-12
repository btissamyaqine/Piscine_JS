// // setTimer must call the callback function before being stopped by callback at every interval after the input time interval.
// //  Never call callback immediately after setTimer has run!



// count : number
// callback(count) //returns true/false => to stop or continue the setTimer
// interval: var | () ???
// setTimer(callback, interval)
//   - call 
//     -> callback() 
//       -> passi 
//         -> count (each call +1)




// setTimer(setTimeout,setInterval) {
//   while setTimeout -> true
//   ...
// }

// setTimeout(count) -> true/false

// setInterval() {
//   return 100;
// }
// -> interval : 100








setInterval  = () => {
  return (2);
}

setTimeout  = (count) => {
  if (count)
    return (true) //returns true/false => to stop or continue the setTimer
  return (false) //returns true/false => to stop or continue the setTimer
}

setTimer = (setTimeout , setInterval ) => {
  inc = setInterval();
  while (inc) {
    console.log(setTimeout);
    inc--;
  }
  // callback(interval());
}

setTimer()







