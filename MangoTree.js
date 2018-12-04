"use strict"
// Release 2
const FruitTree = require('./FruitTree.js');
class MangoTree  extends FruitTree{
  constructor(fruitName, agePlant, height, matureAge, healthStatus) {
    super(fruitName, agePlant, height, matureAge, healthStatus, 20, 18);
  }
}

module.exports = MangoTree;
