// create a dynamicType object that works like below!
const dynamicType = {
  put : function (nbr) {
    this.nbr = nbr
    return nbr;
  },
  change : function(argType) {
    let n = this.put; // how pass n value from put to this function ? 
    
    if (argType == "String") {
      var num = n.toString()
      return num;
    } 
    else if (argType == "Array") {
      return Array.from(String(this.nbr));
    }
    else {
      return n;
    }
    
  },
  printType: function() {
    console.log(this.nbr);
  }, 
}
dynamicType.put(42);
// dynamicType.change("Array");
dynamicType.change("String");
dynamicType.printType();


// const dynamicType = {
//   value: 0,
//   put: (value) => {
//     dynamicType.value = value
//   }
// }

// console.log(dynamicType.value)