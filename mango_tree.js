const FruitTree = require('./fruit_tree.js').FruitTree;
const Fruit = require('./fruit_tree.js').Fruit;
class MangoTree extends FruitTree {

  // Initialize a new MangoTree
  constructor (ageTree, heightTree, matureAgeTree, stopGrow, deadAgeTree) {
    super();
    this._age = ageTree;
    this._height = heightTree;
    this._stopGrow = stopGrow;
    this._matureAge = matureAgeTree;
    this._deadAge = 17;
  }
}


class Mango extends Fruit {
  // Produce a mango
  constructor(){
    super();
    // console.log(this.quality);
    this.quality;
  }
}

module.exports = {MangoTree, Mango};
