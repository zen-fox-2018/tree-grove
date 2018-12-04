class MangoTree {

  // Initialize a new MangoTree
  constructor ( ageTree, heightTree, matureAgeTree, stopGrow, deadAgeTree, fruit) {
    this._age = ageTree;
    this._height = heightTree;
    this._stopGrow = stopGrow;
    this._fruits = [];
    this._matureAge = matureAgeTree;
    this._deadAge = 20;
    this._harvested = '';
    this._healthStatus = true;
    this._goodFruit = 0;
    this._badFruit = 0;
    this._fruit = fruit;
  }

  get age () {
    return this._age;
  }

  get height () {
    return this._height;
  }

  get fruits () {
    return this._fruits.length;
  }

  get healthStatus () {
    return this._healthStatus;
  }

  get harvested () {
    return this._harvested;
  }

  get matureAge () {
    return this._matureAge;
  }
  // Get current states here

  // Grow the tree
  grow () {
    this._age = this._age + 1;
    if (this._age <= this._stopGrow) {
      this._height = this._height + Math.floor(Math.random() * 2);
    }
    if (this._age >= this._deadAge){
      this._healthStatus = false;
    }
  }

  // Produce some mangoes
  produceFruit () {
    if (this._age >= this._matureAge && this._healthStatus === true) {
      var fruitsPerProduce = Math.floor((Math.random() * 10)+1);
      // console.log(fruitsPerProduce);
      for (var i = 0; i < fruitsPerProduce; i++) {
        let fruit = new Mango();
        // console.log(mangoFruit);
        this._fruits.push(fruit);
      }
    }
    // console.log(this._fruits);
  }

  // Get some fruits
  harvest () {
    // console.log(this._fruits);
    for (var i = 0; i < this._fruits.length; i++) {
      if (this._fruits[i]._quality === true){
        this._goodFruit += 1;
        // console.log(this._goodFruit);
      }
      else {
        this._badFruit += 1;
      }
    }
    // console.log(this._goodFruit);
    this._harvested = this._fruits.length + ' (' + this._goodFruit+' good, '+ this._badFruit+' bad)';
  }
}

class Mango {
  // Produce a mango
  constructor () {
     this._quality = this.randomQuality() ;
  }

  randomQuality(){
    var quality = Math.round(Math.random());
    if (quality === 1) {
      return true;
    }
    else {
      return false;
    }
  }
}

module.exports = {MangoTree, Mango};
