const FruitTree = require('./mainTree.js')
const Apple = require('./apple_fruit.js')

class AppleTree extends FruitTree {
    constructor(name, age, height, matureAge, healthStatus) {
        super(name, age, height, matureAge, healthStatus)
        this._endofTree = 8;
    }

    produceFruits() {
        if (this._age >= matureAge) {
            let generateFruits = Math.round(Math.random() * 12)
            for (let i = 0; i < generateFruits; i++) {
                this._fruits.push(new Apple())
            }
        }
        return this._fruits
    }
}

let appleTree = new AppleTree()

module.exports = AppleTree