// 1. Array functions are not available
// 2. execute tests

// - stackEmpty(stack) : checks whether an array in an object (stack) is empty. Returns a Boolean.
// - stackPush(stack, data) : A function that adds data to the top of an array in an object (stack).
// - stackPeek(stack) : A function that returns the data at the top of an array in an object (stack).
// - stackPop(stack) : A function that deletes the data at the top of an array in an object (stack).

const stackCreate = () => ({
  arr: []
});

// check the arr if is it empty 
const stackEmpty = (stack) => {
  if(!Array.isArray(stack))
    console.log("Is Not a Stack !");
  else if (stack.length === 0)
    console.log(1)
  else 
    console.log(0)
}

stackEmpty([2]);


  
//   // add a object to the top of an arr
//   stackPush(stack, data){
//     if(!Array.isArray(stack)){
//       console.log(0);
//     } 
//     if(!this.arr.stack.lenght == 0){
//         this.arr.unshift(data);
//     }
//   },

//   // return the data at the top of an array
//   stackPeek(stack){
//       stack = Object.assign({}, this.arr);
//       console.log(stack)
//   },
//   // delete data at the top of an array
//   stackPop(stack){
//   stack = this.arr.shift();
//   console.log(stack)
//   },
// });


