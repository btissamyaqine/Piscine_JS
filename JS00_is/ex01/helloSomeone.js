export default function helloSomeone(x){
  if((typeof(x) ==='string') && (x !== ""))
    console.log('Hello '+x+'!');
  else if(x === "")
    console.log("Who are you?");
  else if ((typeof(x) ==='number') && (x <= 0))
    console.log("I am Benjamin Button!");
  else if((typeof(x) ==='number') && (x > 0))
    console.log("My age is "+x);
  else if(x === null)
    console.log("I am null and void");
  else if (typeof(x) === 'undefined')
    console.log("Nobody can define me!");
  else if (isNaN(x))
    console.log("Age is just a number");
  }

// resources
// https://stackoverflow.com/questions/58211880/uncaught-syntaxerror-cannot-use-import-statement-outside-a-module-when-import