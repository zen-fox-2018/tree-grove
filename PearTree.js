"use strict"
// Release 2
const FruitTree = require('./FruitTree.js')
class PearTree  extends FruitTree{
  constructor(fruitName, agePlant, height, matureAge, healthStatus) {
    super(fruitName, agePlant, height, matureAge, healthStatus, 10, 8);
  }
}

module.exports = PearTree;
