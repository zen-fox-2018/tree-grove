class FruitTree {
  constructor (treeName, treeAge, treeHeight, treeMatureAge, treeHealthStatus) {
    this.name = treeName
    this.age = treeAge
    this.height = treeHeight
    this.matureAge = treeMatureAge
    this.healthStatus = treeHealthStatus
    this.deadAge = 10
  }
}

module.exports = FruitTree