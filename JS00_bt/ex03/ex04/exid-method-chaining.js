const exidMethodChaining = {
  count: function (nbr) {
    this.nbr = nbr;
    return this
  },

  up() {
    const limit = 42;
    while (this.nbr < limit) {
      this.nbr++;
    }
    return this
  },
  down() {
    const limit = 42;
    while (this.nbr > limit) {
      this.nbr--;
    }
    return this
  },
  showCount() {
    console.log(this.nbr)
    return this
  },

};
exidMethodChaining.up().down().up().up().down().up().down().up().up().down().showCount()
