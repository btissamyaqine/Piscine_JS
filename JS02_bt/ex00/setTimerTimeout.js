
function interval(milisecs) {
  var nowT = new Date().getTime();
  if(new Date().getTime() <= nowT + milisecs){
  }
}

function setTimeout(count) {

  if(!count){
    var count = 0;
    while(count <=2){
      console.log(count++);
    }
    return true;
  }
  return false;
}

function setTimer(setTimeout,interval) {
  
  //  interval(setTimeout());
    setTimeout(interval())
  //  setTimeout()
}

setTimer(setTimeout, interval);
// setTimer(setTimeout, 1000)