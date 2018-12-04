
const FruitTree = require('./fruit_tree.js')

class MangoTree extends FruitTree {
    constructor(name, age, height, matureAge, healthStatus) {
        super(name, age, height, matureAge, healthStatus)
        this._deathAge = 9
    }

    set age(x) {
        this._age += x
    }

    get age() {
        return this.age
    }

    grow() {
        this.age = 1
    }
}


module.exports = MangoTree