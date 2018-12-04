const FruitTree = require('./fruit_tree.js')

class MangoTree extends FruitTree{
  constructor(treeAge, treeHeight, treeMatureAge, treeHealthStatus) {
    super("MangoTree", treeAge, treeHeight, treeMatureAge, treeHealthStatus)
    this.deadAge = 20
  }
}

module.exports = MangoTree