const exidMethodChaining = {
  count: 0,
  up(){
    this.count = this.count + 1;
    return this
  },
  down(){
    this.count = this.count - 1;
    return this
  },
  showCount(){
    console.log(this.count); 
    return this
  },
};

exidMethodChaining.up().down().up().up().down().up().down().up().up().down().showCount()