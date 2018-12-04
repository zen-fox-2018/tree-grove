"use strict"
const FruitTree = require('./FruitTree')
const Pear = require('./Pear')

class PearTree extends FruitTree {
  constructor(age, height, matureAge, healthStatus) {
    super(age, height, matureAge, healthStatus)
    this._maxAge = 10
  }

  produceFruits () {
    if (this.age >= this.matureAge) {
      let fruits = Math.floor(Math.random() * (9 - 1 + 1)) + 1
      for (let i = 0; i < fruits; i++) {
        this.fruits = new Pear()
      }
    }
  }
  
}

module.exports = PearTree