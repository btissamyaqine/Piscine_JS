
function randomFail() {
  if (Math.random() < 0.2) {
    throw ('Production failed..!(The salary was cut ㅜㅜ)');
  }
}
async function restaurant_food() {

  let make_dough =  new Promise((resolve) => {
    try{
       setTimeout(() => resolve("make dought is done!"), 3000)

    } catch {
      randomFail()
    }
  });
  let resault = await make_dough
  console.log(resault);

  let primary_fermentation =  new Promise((resolve) => {
    try{
       setTimeout(() => resolve("primary fermentation are done!"), 5000)

    } catch {
      randomFail()
    }
  });
  let resault1 = await primary_fermentation
  console.log(resault1);

  let molding =  new Promise((resolve) => {
    try{
       setTimeout(() => resolve("Molding are done!"), 4200)

    } catch {
      randomFail()
    }
  });
  let resault2 = await molding
  console.log(resault2);
  

  let moldSecond_fermentationing = new Promise((resolve) => {
    try {
      setTimeout(() => resolve("Molding fermentationing are done"), 2000)
    } catch {
      randomFail()
    }
  })
  let result3 = await moldSecond_fermentationing;
  console.log(result3);

  let fry = new Promise((resolve) => {
    try {
      setTimeout(() => resolve("Fry is done!"), 5000)
    } catch {
      randomFail();      
    }
  })
  let result4 = await fry;
  console.log(result4)
}
restaurant_food();
