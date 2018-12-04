"use strict"

class FruitTree {

  constructor ( name, earlyAge, earlyHeight, matureAge, healthStatus ) {
    this._name = name
    this._age = earlyAge
    this._height = earlyHeight
    this._fruits = []
    this._healthStatus = healthStatus
    this._harvested = ''
    this._matureAge = matureAge
    this._deadAge = 25
    // this._productiveAge = productiveAge
    this._stopGrowAge = 15
    this._growAverage = 10
  }

  get name() {
    return this._name
  }

  get age() {
    return this._age
  }

  set age(n) {
    this._age = this._age + 1
  }

  // get productiveAge() {
  //   return this._productiveAge
  // }

  get stopGrowAge() {
    return this._stopGrowAge
  }

  get growAverage() {
    return this._growAverage
  }

  get deadAge() {
    return this._deadAge
  }

  get height () {
    return this._height
  }

  set height (plus) {
    this._height =  this._height + plus
  }

  get fruits () {
    return this._fruits
  }

  set fruits (input) {
    this._fruits.push(input)
  }

  set resetFruits(reset) {
    this._fruits = reset
  }

  get healthStatus () {
    return this._healthStatus
  }

  set healthStatus (input) {
    this._healthStatus = input
  }

  get harvested () {
    return this._harvested
  }

  set harvested(value) {
    this._harvested = value
  }

  set resetHarvest(reset) {
    this._harvested = reset
  }

  get matureAge () {
    return this._matureAge
  }

  set matureAge (input) {
    this._matureAge = input
  }

  // Get current states here
  // Grow the tree
  grow () {
    this.age = 1
    if (this.age > this.productiveAge) {
      this.matureAge = true
    }

    if (this.age === this.deadAge) {
      this.healthStatus = false
    } else if (this.age <= this.stopGrowAge) {
      this.height = (Math.floor(Math.random() * this.growAverage) / 10)
    }

  }

  // Produce some mangoes
  produceFruit () {
    let output = []
    if (this.matureAge) {
      let n = Math.floor(Math.random() * 10) + 2
      for (let i = 0 ; i < n ; i++) {
        let newFruit = null;
        if (this.name === 'MangoTree') {
          newFruit = new Mango()
        } else if (this.name === 'AppleTree') {
          newFruit = new Apple()
        } else if (this.name === 'PearTree') {
          newFruit = new Pear()
        }
        this.fruits = (newFruit)
      }
    }
  }

  // Get some fruits
  harvest () {
    let good = 0
    let bad = 0
    for (let i = 0 ; i < this.fruits.length ; i++) {
      // console.log(this.fruits[i]);
      if (this.fruits[i].quality == 'Good') {
        good++
      } else {
        bad++
      }
    }
    this.harvested = `${this.fruits.length} (${good} good, ${bad} bad)`
    this.resetFruits = []

  }
}

module.exports = FruitTree
