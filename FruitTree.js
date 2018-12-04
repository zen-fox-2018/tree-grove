class FruitTree {
  constructor (treeName, treeAge, treeHeight, treeMatureAge, treeHealthStatus) {
    this.name = treeName
    this.age = treeAge
    this.height = treeHeight
    this.matureAge = treeMatureAge
    this.healthStatus = treeHealthStatus
    this.deadAge = 10
  }

  grow () {
    this.age++
    if (this.age >= this.deadAge) {
      this.healthStatus = false
    }
    if (this.age <= this.matureAge ) {
      this.height = Math.random()*2
    }

  }
}

module.exports = FruitTree