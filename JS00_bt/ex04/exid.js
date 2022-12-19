const exid = {
  count: function (nbr) {
    this.nbr = nbr;
  },
  up() {
    const limit = 42;
    while (this.nbr < limit) {
      this.nbr++
    }
    this.nbr = this.nbr
  },
  down() {
    const limit = 42;
    while (this.nbr > limit) {
      this.nbr--
    }
    this.nbr = this.nbr
  },
  showCount() {
    console.log(this.nbr)
  },
};

exid.up(30);
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