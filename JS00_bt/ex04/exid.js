const exid = {
  count: function(nbr){
    return nbr;
  },
  up(nbr){
    var limit = 42;
     nbr = this.count
    while(nbr < limit){
      nbr+= 1;
    }
  },
  down(nbr){
    let limit = 42
    nbr = this.up
    while(nbr > limit){
      nbr-= 1
    }
  },
  showCount(){
     console.log(this.count)
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