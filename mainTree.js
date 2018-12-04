const Fruit = require("./mainFruit.js")

class FruitTree {
    constructor(name, age, height, matureAge, healthStatus) {
        this._name = name
        this._age = age;
        this._height = height;
        this._matureAge = matureAge;
        this._healthStatus = healthStatus;
        //------------------------------//
        this._maxHeight = 10;
        this._fruits = [];
        this._harvested = '';
        this._endofTree = 20;
    }

    get age() {
        return this._age
    }

    get height() {
        return this._height
    }

    get maxHeight() {
        return this._maxHeight
    }

    get fruits() {
        return this._fruits
    }

    get healthStatus() {
        return this._healthStatus
    }

    get harvested() {
        return this._harvested
    }

    get mature() {
        return this._matureAge
    }

    get endofTree() {
        return this._endofTree
    }

    // Get current states here
    // ------------------------

    // Grow the tree
    grow() {
        // Implementasi method grow No.1
        // pertumbuhan umur pohon
        this._age++

        // Implementasi method grow No.2
        // pertumbuhan tinggi pohon dengan nilai randomg
        this._height += Math.round(Math.random())

        // Implementasi method grow No.4
        // pohon berhenti bertambah tinggi jika LEBIH BESAR atau SAMA DENGAN batas tinggi max
        if (this._height >= this._maxHeight) this._height = this._maxHeight

        // Implementasi method grow No.5
        // jika umur pohon SAMA DENGAN batas umur pohon, maka akan berhenti bertumbuh
        if (this._endofTree === this._age) this._healthStatus = false

        return this
    }

    // Produce some fruits
    produceFruits() {
        // Implementasi method grow No.3
        // Jika umur pohon LEBIH BESAR atau SAMA DENGAN umur mantang, maka pohon akan berbuah
        if (this._age >= this._matureAge) {
            let generateFruits = Math.round(Math.random() * 10);

            for (let i = 1; i <= generateFruits; i++) {
                this._fruits.push(new Fruit())
            }

        }
    }

    // Get some fruits
    harvest() {
        let good = 0
        let bad = 0

        for (let i = 0; i < this._fruits.length; i++) {
            this._fruits[i].quality == 'good' ? good++ : bad++
        }

        this._harvested = `${this._fruits.length} (${good} good, ${bad} bad)`
        this._fruits = []
    }
}

module.exports = FruitTree