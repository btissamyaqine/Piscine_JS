function randomFail() {
  if (Math.random() < 0.2) {
    throw ('Production failed..!(The salary was cut ㅜㅜ)');
  }
}

let biol_noodle = new Promise(function(resolve){
    setTimeout(() => resolve("Biol noodles are done is first"), 10000);
  randomFail()
  
})

// biol_noodle.then(
//   result => console.log(result), 
//   error => console.log(error)
// )

  let broccoli_replacement = new Promise(function(resolve){
    setTimeout(() => resolve("Broccole replacement is done it's second"), 1000)
  randomFail();
  })
  // broccoli_replacement.then(
  //   result => console.log(result), 
  //   error => console.log(error)
  // )


  let saute_garlic_inion = new Promise(function(resolve) {
    setTimeout(() => resolve("Saute garlic onion is done it's second"), 2000)
  randomFail()
  })
  // saute_garlic_inion.then(
  //   result => console.log(result), 
  //   error => console.log(error)
  // )
  

  let saute_bacon_ham = new Promise(function(resolve) {
    setTimeout(() => resolve("Saute bacon ham is done it's second"), 2000)
  randomFail();

  })
  // saute_bacon_ham.then(
  //   result => console.log(result), 
  //   error => console.log(error)
  // )

  let add_sauce_remaining_stir_fry = new Promise(function(resolve) {
    setTimeout(() => resolve("Saute bacon ham is done it's second"), 3000)
  randomFail();

    })
    // add_sauce_remaining_stir_fry.then(
    //   result => console.log(result), 
    //   error => console.log(error)
    // )

  Promise.all([biol_noodle, broccoli_replacement, saute_garlic_inion, saute_bacon_ham, add_sauce_remaining_stir_fry]).then(
    resault => console.log(resault),
    error => console.log(error)
    ) 

let add_noodles_stir_fry = new Promise(function(resolve){
    setTimeout(() => resolve("Add noodles and stir-fry together are done it's the last"), 3000)
  randomFail()
})
add_noodles_stir_fry.then(
  resault => console.log(resault),
  error => console.log(error)
)

