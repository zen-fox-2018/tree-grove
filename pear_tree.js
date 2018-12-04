const FruitTree = require('./fruit_tree.js')

class PearTree extends FruitTree {
  constructor(treeAge, treeHeight, treeMatureAge, treeHealthStatus) {
    super("PearTree", treeAge, treeHeight, treeMatureAge, treeHealthStatus)
    this.deadAge = 15
  }
}

module.exports = PearTree