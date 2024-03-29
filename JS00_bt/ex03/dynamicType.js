const dynamicType = {
  put: function (nbr) {
    this.nbr = nbr;
  },
  change: function (argType) {
    if (argType === "String") 
      // this.nbr = `${this.nbr}`;
      this.nbr = this.nbr.toString();
    else if (argType === "Array")
      this.nbr = [this.nbr];
    else if (argType === "Object")
    // ({}) equal to object.prototype
     this.nbr = ({}).valueOf.call(this.nbr);
    else (argType === "Number")
      this.nbr = Number(this.nbr)
     
  },
  printType: function () {
    console.log(this.nbr);
  }
};
dynamicType.put(42);
dynamicType.change("Object");
dynamicType.printType();
// dynamicType.change("Array");
// dynamicType.printType();

