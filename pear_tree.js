const FruitTree = require('./mainTree')
const Pear = require('./pear_fruit.js')

class PearTree extends FruitTree {
    constructor(name, age, height, matureAge, healthStatus) {
        super(name, age, height, matureAge, healthStatus)
        this._endofTree = 11;
    }

    produceFruits() {
        if (this._age >= matureAge) {
            let generateFruits = Math.round(Math.random() * 19)
            for (let i = 0; i < generateFruits; i++) {
                this._fruits.push(new Pear())
            }
        }
        return this._fruits
    }
}

let pearTree = new PearTree()

module.exports = PearTree