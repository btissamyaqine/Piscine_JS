// Make the dough - 3 seconds
// Primary fermentation - 5 seconds
// Molding - 4.2 seconds
// Second fermentation - 2 seconds
// Fry - 5 seconds

// Each task should be implemented using setTimeout function.
// The name of each step should be displayed using console.log. 
// failure by calling the function below each time.
function randomFail() {
  if (Math.random() < 0.2) throw "Production failed..!(The salary was cut ㅜㅜ)";
}
const make_dough = () => {
  randomFail();
  console.log("Make the dough is done!");

}
setTimeout(make_dough,3000);

