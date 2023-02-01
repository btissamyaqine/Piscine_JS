const exid = {
  count: 0,
  up(){
    this.count = this.count + 1;
  },
  down(){
    this.count = this.count - 1;
  },
  showCount(){
    console.log(this.count); 
  },
};

exid.up();
exid.down();
exid.up();
exid.up();
exid.down();
exid.up();
exid.down();
exid.up();
exid.up();
exid.down();
exid.showCount();