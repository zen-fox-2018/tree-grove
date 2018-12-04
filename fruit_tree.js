"use strict"

class FruitTree {
  constructor (growingHeight, oldAge, matureAge, dyingAge, typeOfFruit){
    this._age = 0;
    this._height = 0;
    this._fruits = [];
    this._getHealthStatus = true;
    this._harvested = 0;

    this.growingHeight = growingHeight;
    this.oldAge = oldAge;
    this.matureAge = matureAge;
    this.dyingAge = dyingAge;
    this.typeOfFruit = typeOfFruit;
  }

  get age() {
    return this._age;
  }
  get height() {
    return this._height;
  }
  get fruits() {
    return this._fruits;
  }
  get healthStatus() {
    return this._getHealthStatus;
  }
  get harvested() {
    return this._harvested;
  }

  set age(input) {
    this._age += input;
    if (this._age >= this.dyingAge) {
      this._getHealthStatus = false;
    }
  }
  set height(input) {
    if (this.age < this.oldAge) {
      input = Math.floor(Math.random() * input);
      this._height += Number(input);
    }
  }

  grow() {
    this.age = 1;
    this.height = this.growingHeight;

    if (this._age % this.matureAge === 0) {
      this._harvested = this.harvest();
    } else {
      this._harvested = 0;
    }
  }

  // Produce some mangoes
  produceFruits() {
    let fruits = Math.ceil(Math.random() * 10);
    for (let i = 0; i < fruits; i++) {
      let newFruits = new Fruit();
      this._fruits.push(newFruits);
    }
  }

  harvest() {
    let good = 0;
    let bad = 0;
    for (let i = 0; i < this._fruits.length; i++) {
      if (this._fruits[i].quality === 'good') {
        good += 1;
      } else {
        bad += 1;
      }
    }
    this._harvested = `${this._fruits.length} (${good} good, ${bad} bad)`;
    this._fruits = [];
    // return this._harvested;
  }
}

class Fruit {
  constructor() {
    this.quality = this.qualities();
  }

  qualities() {
    let random = Math.round(Math.random());
    if (random === 0) {
      return 'bad';
    } else if (random === 1) {
      return 'good';
    }
  }
}

var obj = {fruitTree: FruitTree, fruits: Fruit};
module.exports = obj;