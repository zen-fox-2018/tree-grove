const FruitTree = require('./fruit_tree.js')

class AppleTree extends FruitTree {

  constructor ( earlyAge, earlyHeight, matureAge, healthStatus ) {
    super('AppleTree', earlyAge, earlyHeight, matureAge, healthStatus )
    this._deadAge = 13
    this._stopGrowAge = 10
    this._growAverage = 6
  }
}

module.exports = AppleTree
