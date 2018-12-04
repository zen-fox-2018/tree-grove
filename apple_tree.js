const FruitTree = require('./fruit_tree.js')

class AppleTree extends FruitTree {
  constructor(treeAge, treeHeight, treeMatureAge, treeHealthStatus) {
    super("AppleTree", treeAge, treeHeight, treeMatureAge, treeHealthStatus)
    this.deadAge = 25
  }
}

module.exports = AppleTree