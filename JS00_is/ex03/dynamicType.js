const dynamicType = {
  put : function (nbr) {
    this.nbrGlobal = nbr
  },
  change : function (newType) {
    if(newType === "String")
      this.nbrGlobal = this.nbrGlobal.toString()
    else if(newType === "Array") {
      this.nbrGlobal = [this.nbrGlobal]
    }
    else if(newType === "Number")
      this.nbrGlobal = Number(this.nbrGlobal)
    else if(newType === "Object")
      this.nbrGlobal = Object.prototype.valueOf.call(this.nbrGlobal)
  },
  printType : function() {
    console.log(this.nbrGlobal)
  } 
}

dynamicType.put(42);

dynamicType.change("Array");
dynamicType.printType();

dynamicType.change("String");
dynamicType.printType();

dynamicType.change("Number");
dynamicType.printType();

dynamicType.change("Object");
dynamicType.printType();

