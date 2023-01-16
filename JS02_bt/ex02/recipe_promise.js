function randomFail() {
  if (Math.random() < 0.2) {
    throw ('Production failed..!(The salary was cut ㅜㅜ)');
  }
}
let make_dough = new Promise(function(resolve, reject) {
    setTimeout(() => resolve(("make dought is done!")), 3000);
  randomFail()
});

// reject runs the second function in .then
make_dough.then(
  result => console.log(result), 
  error => console.log(error) 
);
let primary_fermentation = new Promise(function(resolve,reject) {
  setTimeout(() => resolve(("primary fermentation are done!")), 5000);
randomFail()
});
primary_fermentation.then(
result => console.log(result), 
error => console.log(error) 
);
let molding = new Promise(function(resolve,reject) {
  setTimeout(() => resolve(("Molding are done")), 4200);
randomFail()
});
molding.then(
result => console.log(result), 
error => console.log(error) 
);
let moldSecond_fermentationing = new Promise(function(resolve,reject) {
  setTimeout(() => resolve(("Molding fermentationing are done")), 2000);
randomFail()
});
moldSecond_fermentationing.then(
result => console.log(result), 
error => console.log(error) 
);
let fry = new Promise(function(resolve,reject) {
  setTimeout(() => resolve(("Fry is done")), 5000);
randomFail()
});
fry.then(
result => console.log(result), 
error => console.log(error) 
);
