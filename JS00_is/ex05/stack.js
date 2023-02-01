// 1. Array functions are not available
// 2. execute tests

// - stackEmpty(stack) : checks whether an array in an object (stack) is empty. Returns a Boolean.
// - stackPush(stack, data) : adds    data to the top of an array in an object (stack).
// - stackPeek(stack) :       returns data at the top of an array in an object (stack).
// - stackPop(stack) :        deletes data at the top of an array in an object (stack).

const stackCreate = () => ({
  arr: []
});

const stackEmpty = (stack) => {
  return JSON.stringify(stack) === '{"arr":[]}';
}

const stackPush = (stack, data) => {
  stack = Object.assign(data, stack)
  return stack
}

// Object.values(obj).sort((a,b) =>b-a).slice(0,5);

const stackPeek = (stack) => {
  return (stack[Object.keys(stack)[Object.keys(stack).length-1]]);
}

const stackPop = (stack) => {
  stack = this.arr.shift();
  return stack
},


stack = stackCreate();
// console.log(stackEmpty(stack))
console.log(stackPush(stack, [73,7]))
// console.log(stackPeek(stack))
stackPop(stack)


