// export function setTimer(callback, interval) {
//   var d = new Date();
//   var i = d.getTime();
//   var global_time = i + interval;
//   while(Date.now() <= global_time) {
//   }
//   return callback();
// }
// setTimer(function(){
// console.log("Timeout success");
// },5000);

// function salam(name) {
//   console.log("salam " + name)
// }

// function test(callback) {

//   var name= "btissam";
//   callback(name);
// }

const interval = (milisecs) => {
  var nowT = Date.now();
  while(Date.now()< nowT+milisecs){
  }
  return setTimeout()
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
  
   interval(setTimeout())
}

setTimer(setTimeout, interval);