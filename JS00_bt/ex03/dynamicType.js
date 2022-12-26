const dynamicType = {
  put: function (nbr) {
    this.nbr = nbr;
  },
  change: function (argType) {
    if (argType === "String") 
      this.nbr = `${this.nbr}`;
    else if (argType === "Array") 
      this.nbr = [`${this.nbr}`];
  },
  printType: function () {
    console.log(this.nbr);
  }
};
dynamicType.put(42);
dynamicType.change("String");
dynamicType.printType();
dynamicType.change("Array");
dynamicType.printType();

