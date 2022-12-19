const stackCreate = () => ({
  arr: [],
  // check the arr if is it empty 
  stackEmpty(stack){
    if(!Array.isArray(stack)){
      console.log(0);
    }
    if(this.arr.stack.lenght == 0){
      console.log(0);
    }else{
      console.log(1);
    }
  },
  // add a object to the top of an arr
  stackPush(stack, data){
    if(!Array.isArray(stack)){
      console.log(0);
    } 
    if(!this.arr.stack.lenght == 0){
        this.arr.unshift(data);
    }
  },
  // return the data at the top of an array
  stackPeek(stack){
      stack = Object.assign({}, this.arr);
      console.log(stack)
  },
  // delete data at the top of an array
  stackPop(stack){
  stack = this.arr.shift();
  console.log(stack)
  },
});
try {
    stackCreate.stackEmpty();
    stackCreate.stackPush();
    stackCreate.stackPeek();
    stackCreate.stackPop();
} catch (error) {
    stackCreate.stackEmpty() == '';
    stackCreate.stackPush() == '';
    stackCreate.stackPeek() == '';
    stackCreate.stackPop() == '';
    logMyErrors(error)
}