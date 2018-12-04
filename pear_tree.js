let FruitTree = require(`./fruit_tree`)

class PearTree extends FruitTree{
    constructor(name, initialAge, height, matureAge, healthStatus) {
        super(name, initialAge, height, matureAge, healthStatus)
        this.deadAge = 12
    }
}

module.exports = PearTree