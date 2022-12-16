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