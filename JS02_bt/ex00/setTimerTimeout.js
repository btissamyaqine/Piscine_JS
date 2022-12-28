const setTimer = (callback, mill_second) => {
  var d = new Date();
  var i = d.getTime();
  var global_time = i + mill_second;
  while(Date.now() <= global_time) {
  }
  return callback();
}
export default setTimer; 
// export default
// setTimer(function(){
// console.log("Timeout success");
// },5000);
