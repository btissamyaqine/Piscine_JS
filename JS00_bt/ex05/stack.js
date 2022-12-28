 


const stackCreate = () => ({
  arr: []
});

// check the arr if is it empty 
const stackEmpty = (stack) => {
  if(!Array.isArray(stack))
    console.log("Stack is Not an Array !");
  else if (stack.length === 0)
    console.log("The Array is empty")
  else 
    console.log("The Array is not empty")
}
// return the data at the top of an array
 const stackPush = (stack, data) => {
  stack = [1,2];
  data = 6;
    if(!Array.isArray(stack) || stack.length === 0 ){
      console.log("error check your stack if is it empty or not a table");
    } else {
      // const newArray = [data].concat(stack) // true
      // const newArray = stack.unshift([data])] // it's not true it's show the number of index
      const newArray = [data, ...stack] // true
        console.log(newArray);
    }
  };
  // returns the data at the top of an array in an object (stack)
  const stackPeek = (stack) => {
      stack = [1,2,3]
      if(stack.length !== 0){
      const myObject = Object.assign({}, stack);
      console.log(myObject);
    }else console.log("error")
  };
    // delete data at the top of an array
  const stackPop = (stack) => {
    stack = [1,2,3,4]
    if (stack.length === 0){
      console.log("error")
    }else{
    const myPop = stack.shift();
    console.log(myPop)
    console.log(stack)
  }
  }
// stackEmpty([5]);
// stackPush([])
// stackPeek()
stackPop()
