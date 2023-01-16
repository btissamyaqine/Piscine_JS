function randomFail() {
  if (Math.random() < 0.2) {
    throw ('Production failed..!(The salary was cut ㅜㅜ)');
  }
}
function make_dough() {
  randomFail()
console.log("make dought is done")
}
setTimeout(make_dough,3000);

function primary_fermentation() {
  randomFail()
console.log("primary fermentation are done");

}
setTimeout(primary_fermentation,5000);

function molding() {
  randomFail()
console.log("Molding are done");
}
setTimeout(molding,4200);

function moldSecond_fermentationing() { 
  randomFail()
console.log("Molding fermentationing are done");
}
setTimeout(moldSecond_fermentationing,2000);

function Fry() {
  randomFail()
console.log("Fry is done")
}
setTimeout(Fry,5000);






