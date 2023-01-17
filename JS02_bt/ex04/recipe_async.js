
function randomFail() {
  if (Math.random() < 0.2) {
    throw ('Production failed..!(The salary was cut ㅜㅜ)');
  }
}
async function restaurant_food() {

  let make_dough = new Promise((resolve, reject) => {
    try{
      setTimeout(() => resolve("make dought is done!"), 3000)

    } catch {
      randomFail()
    }
  });
  let resault = await make_dough
  console.log(resault)
}
restaurant_food()