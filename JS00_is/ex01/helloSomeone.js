// ft that takes a params at execution time + prints a greeting helloSomeone.


// String, number, NaN, undefined, null => can be entered as parameters.


// Depending on which parameter, a function that behaves as follows should be implemented.


export default function helloSomeone(x){
  if((typeof(x) ==='string') && (x !== ""))
    console.log('Hello '+x);
  else if(x === "")
    console.log("Who are you?");
  else if (x <= 0)
      console.log("I am Benjamin Button!");
  else if(x === null)
    console.log("I am null nad void");
  else if (isNaN(x))
    console.log("Age is just a number");
  else if (typeof(x) === 'undefined')
    console.log("Nobody can define me!");
  else if(typeof(x) ==='number')
    console.log("My age is "+x);
}

// function doSomething(x) {
//   if(typeof(x) === 'string') {
//     alert('x is a string')
//   } else if(typeof(x) === 'number') {
//     alert('x is a number')
//   }
// }
// ft();
// ft();



// resources
// https://stackoverflow.com/questions/58211880/uncaught-syntaxerror-cannot-use-import-statement-outside-a-module-when-import