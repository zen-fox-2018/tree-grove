"use strict"

class Fruits {
  // Produce a mango
  constructor () {
    this.quality = this.randomQuality();
  }

  randomQuality(){
    let result = '';
    let random = Math.round(Math.random());
    random === 0 ? result = 'good' : result = 'bad';
    return result;
  }
}

module.exports = Fruits;
