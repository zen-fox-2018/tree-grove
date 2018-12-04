const FruitTree = require('./fruit_tree.js')

class PearTree extends FruitTree {

  constructor ( earlyAge, earlyHeight, matureAge, healthStatus ) {
    super( 'PearTree', earlyAge, earlyHeight, matureAge, healthStatus )
    this._deadAge = 11
    this._stopGrowAge = 9
    this._growAverage = 5
  }
}

module.exports = PearTree
