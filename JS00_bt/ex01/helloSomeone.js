export default function helloSomeone(str){
  switch (str) {
    case "42":
      return("Hello " +str+"!")
    case "":
      return("Who are you?")
    case null:
      return("I am " +str+ " and void!")
    case 42:
      return("My age is "+ str)
    case -1:
      return("I am Benjamin Button!")
    case NaN:
      return("Age is just a number!");
    case undefined:
      return("Nobody can define me!")
    default:
      return("Age is just a number")
      
  }
  
}