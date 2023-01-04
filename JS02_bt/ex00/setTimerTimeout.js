// export function setTimer(callback, interval) {
//   var d = new Date();
//   var i = d.getTime();
//   var global_time = i + interval;
//   while(Date.now() <= global_time) {
//   }
//   return callback();
// }

// function printNum(count) {
// 	console.log(count);
// 	return count < 3;
// }
// setTimer(printNum, 100);
// setTimer(function(){
// console.log("Timeout success");
// },5000);


function salam(name) {
  console.log("salam " + name)
}

function test(callback) {

  var name= "btissam";
  callback(name);
}

test(salam);

