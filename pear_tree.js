const FruitTree = require('./fruit_tree.js').FruitTree;
const Fruit = require('./fruit_tree.js').Fruit;
class PearTree extends FruitTree{
  // Initialize a new MangoTree
  constructor(ageTree, heightTree, matureAgeTree, stopGrow, deadAgeTree){
    super();
    this._age = ageTree;
    this._height = heightTree;
    this._stopGrow = stopGrow;
    this._matureAge = matureAgeTree;
    this._deadAge = 20;
  }
}


class Pear extends Fruit {
  // Produce a mango
  constructor(){
    super();
    this.quality = this.randomQuality();
  }
}

module.exports = {PearTree, Pear};
