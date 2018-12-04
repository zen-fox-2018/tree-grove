const FruitTree = require('./fruit_tree.js').FruitTree;
const Fruit = require('./fruit_tree.js').Fruit;
class AppleTree extends FruitTree{
  // Initialize a new MangoTree
  constructor(ageTree, heightTree, matureAgeTree, stopGrow){
    super(ageTree, heightTree, matureAgeTree, stopGrow, 16);

    //
    // this._age = ageTree;
    // this._height = heightTree;
    // this._stopGrow = stopGrow;
    // this._matureAge = matureAgeTree;
    // this._deadAge = 16;
  }
}


class Apple extends Fruit {
  // Produce a mango
  constructor(){
    super();
    this.quality = this.randomQuality();
  }
}

module.exports = {AppleTree, Apple};
