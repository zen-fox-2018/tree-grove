const FruitTree = require('./fruit_tree.js').FruitTree;
const Fruit = require('./fruit_tree.js').Fruit;
class MangoTree extends FruitTree {

  // Initialize a new MangoTree
  constructor (ageTree, heightTree, matureAgeTree, stopGrow, deadAgeTree) {
    super(ageTree, heightTree, matureAgeTree, stopGrow, 17)
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
