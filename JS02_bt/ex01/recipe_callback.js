function randomFail() {
  if (Math.random() < 0.2) {
    throw ('Production failed..!(The salary was cut ㅜㅜ)');
  }
}

function make_dough() {
  randomFail()
console.log("make dought is done")
}
function primary_fermentation() {
  randomFail()
console.log("primary fermentation are done");

};
function molding() {
  randomFail()
console.log("Molding are done");
}
function moldSecond_fermentationing() { 
  randomFail()
console.log("Molding fermentationing are done");
}
function Fry() {
  randomFail()
console.log("Fry is done")
}
setTimeout(make_dough,3000);
setTimeout(primary_fermentation,5000);
setTimeout(molding,4200);
setTimeout(moldSecond_fermentationing,2000);
setTimeout(Fry,5000);












// function randomFail() {
//   if (Math.random() < 0.2) throw "Production failed..!(The salary was cut ㅜㅜ)";
// }