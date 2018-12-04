let FruitTree = require(`./fruit_tree`)

class AppleTree extends FruitTree{
    constructor(name, initialAge, height, matureAge, healthStatus) {
        super(name, initialAge, height, matureAge, healthStatus)
        this.deadAge = 9
    }
}

module.exports = AppleTree