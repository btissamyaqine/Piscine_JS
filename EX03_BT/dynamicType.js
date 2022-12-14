// create a dynamicType object that works like below!
const dynamicType = {
  put : function (nbr) {
    this.nbr = nbr
    return nbr;
  },
  change : function(str) {
    // how pass n value fron=m put to this function ? 
    let n = this.put;
    
    if (str == "String") {
      var num = n.toString()
      return num;
    } 
    else if (str == "Array") {
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