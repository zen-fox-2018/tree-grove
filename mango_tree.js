let FruitTree = require(`./fruit_tree`)

class MangoTree extends FruitTree {
    constructor(name, initialAge, height, matureAge, healthStatus) {
        super(name, initialAge, height, matureAge, healthStatus)
        this.deadAge = 15
    }
}

module.exports = MangoTree