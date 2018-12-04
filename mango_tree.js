const FruitTree = require('./fruit_tree.js')

class MangoTree extends FruitTree {

  // Initialize a new MangoTree
  constructor ( earlyAge, earlyHeight, matureAge, healthStatus ) {
    super( 'MangoTree', earlyAge, earlyHeight, matureAge, healthStatus )
    this._deadAge = 20
    this._stopGrowAge = 14
    this._growAverage = 9
  }
}

module.exports = MangoTree
