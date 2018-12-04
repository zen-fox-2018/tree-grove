const FruitTree = require('./mainTree.js')
const Mango = require('./mango_fruit.js')

class MangoTree extends FruitTree {
    constructor(name, age, height, matureAge, healthStatus) {
        super(name, age, height, matureAge, healthStatus)
        this._endofTree = 10;
    }

    produceFruits() {
        if (this._age >= matureAge) {
            let generateFruits = Math.round(Math.random() * 10)
            for (let i = 0; i < generateFruits; i++) {
                this._fruits.push(new Mango())
            }
        }
        return this._fruits
    }
}

let mangoTree = new MangoTree()

module.exports = MangoTree