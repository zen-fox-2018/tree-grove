const FruitTree = require('./fruit_tree.js').FruitTree;
const Fruit = require('./fruit_tree.js').Fruit;
class PearTree extends FruitTree{
  // Initialize a new MangoTree
  constructor(ageTree, heightTree, matureAgeTree, stopGrow, deadAgeTree){
    super(ageTree, heightTree, matureAgeTree, stopGrow, 20);
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
