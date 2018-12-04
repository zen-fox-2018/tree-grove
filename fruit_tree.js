class FruitTree {
    constructor(stopGrowingAge, died, matureAge) {
      this._age = 0;
      this._height = 0;
      this._fruitsAvailable = [];
      this._harvested = '';
      this._healthStatus = true;
      this._stopGrowingAge = stopGrowingAge;
      this._died = died;
      this._matureAge = matureAge;
    }
    get age () {
      return this._age;
    }
  
    get height () {
      return this._height;
    }
  
    get fruits () {
      return this._fruitsAvailable;
    }
  
    get healthStatus () {
      return this._healthStatus;
    }
  
    get harvested () {
      return this._harvested;
    }
  
    // Get current states here
  
    // Grow the tree
    grow () {
      this._age += 1;
      if (this._age === this._died) {
        this._healthStatus = false;
      }
      if (this._age < this._stopGrowingAge) {
        let growth = Math.round(Math.random() * 5);
        this._height = this._height + growth;
      }
    }
  
    // Produce some mangoes
    produceFruits () {
      if (this._age >= this._matureAge) {
        let addFruits = Math.round(Math.random() * 10);
        for (let i = 1; i <= addFruits; i++) {
          let fruitQuality = new Fruit();
          this._fruitsAvailable.push(fruitQuality);
        }
      }
    }
  
    // Get some fruits
    harvest () {
      if (this._fruitsAvailable.length !== 0) {
        let good = [];
        let bad = []
        let totalFruits = this._fruitsAvailable.length
        for (let i = 0; i <= this._fruitsAvailable.length-1; i++) {
          if (this._fruitsAvailable[i].quality === "Good") {
            good.push("Good");
          } else {
            bad.push("Bad");
          }
        }
        this._harvested = `${totalFruits} (${good.length} Good, ${bad.length} Bad)`;
      } else {
        this._harvested = 0;
      }
      this._fruitsAvailable = [];
    }
  }
  
  class Fruit {
    constructor () {
      this.quality = this.randomQuality();
    }
    randomQuality() {
      let qualities = ['Good', 'Bad'];
      return qualities[Math.round(Math.random() * 1)];
    }
  }

  module.exports = { FruitTree, Fruit };
