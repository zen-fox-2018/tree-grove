"use strict"
// Release 2
const Mango = require('./Mango.js');
const Apple = require('./Apple.js');
const Pear = require('./Pear.js');
class FruitTree {
  // Initialize a new MangoTree
  constructor (fruitName, agePlant, height, matureAge, healthStatus, endAge, stopGrow) {
    this._age = agePlant;
    this._height = height;
    this._fruits = [];
    this._healthStatus = healthStatus;
    this._harvested = '';
    this._endAge = endAge;
    this._matureAge = matureAge;
    this._stopGrow = stopGrow;
    this._fruitName = fruitName;
  }

  get age () {
    return this._age;
  }

  get height () {
    return +this._height.toFixed(1);
  }

  get fruits () {
    return this._fruits;
  }

  get healthStatus () {
    return this._healthStatus;
  }

  get harvested () {
    return this._harvested;
  }

  get endAge () {
    return this._endAge;
  }

  get matureAge () {
    return this._matureAge;
  }

  get stopGrow () {
    return this._stopGrow;
  }

  get fruitName () {
    return this._fruitName;
  }
  // Get current states here

  // Grow the tree
  grow () {
    this._age += 1;
      this.age <= this.stopGrow ? this._height += Math.random() : false;
      this.age === this.endAge ? this._healthStatus = false : false;
  }

  // Produce some mangoes
  produceFruits () {
    if (this.age >= this.matureAge) {
      let jumlah = Math.ceil(Math.random() * 20);
      let fruit = null;
      if (this._fruitName === 'MangoTree') {
        fruit = new Mango();
      } else if(this._fruitName === 'AppleTree') {
        fruit = new Apple();
      } else if(this._fruitName === 'PearTree') {
        fruit = new Pear();
      }

      for (var i = 0; i < jumlah; i++) {
            this._fruits.push(fruit);
        }
    }
  }

  // Get some fruits
  harvest () {
    let good = 0;
    let bad = 0;
    let total = 0;
    for (let i = 0; i < this.fruits.length; i++) {
        total++;
        if(this.fruits[i].quality === 'good'){
            good++;
        } else {
            bad++;
        }
    }
    this._fruits = [];
    if (total) {
      this._harvested =  `${total} (${good} good, ${bad} bad)`;
    } else {
      this._harvested = total;
    }
  }

}

module.exports = FruitTree;
