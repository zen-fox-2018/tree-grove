"use strict"
// Release 2
const FruitTree = require('./FruitTree.js')
class AppleTree  extends FruitTree{
  constructor(fruitName, agePlant, height, matureAge, healthStatus) {
    super(fruitName, agePlant, height, matureAge, healthStatus, 15, 13);
  }
}

module.exports = AppleTree;
