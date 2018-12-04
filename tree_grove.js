const MangoTree = require('./mango_tree.js');
const AppleTree = require('./apple_tree.js');
const PearTree = require('./pear_tree.js');

class TreeGrove {
  //inisialisasi tree grove
  constructor () {
    this._treeGrove = [];
  }

  inputTree(name, age, height, matureAge, healthStatus) {     //data pohon, jenis, umur
    if (name === 'MangoTree') {
      this._treeGrove.push(new MangoTree(age, height, matureAge, healthStatus));
    } else if (name === 'AppleTree') {
      this._treeGrove.push(new AppleTree(age, height, matureAge, healthStatus));
    } else {
      this._treeGrove.push(new PearTree(age, height, matureAge, healthStatus));
    }
    // console.log(this._treeGrove);
  }

  nextYear() {
    for (let i = 0; i < this._treeGrove.length; i++) {
      this._treeGrove[i].grow();
    }
    console.log(this._treeGrove);
  }

  showAges() {
    let result = '';
    let arr = [];
    for (let i = 0; i < this._treeGrove.length; i++) {
      result = 'umur ' + this._treeGrove[i].constructor.name + ' : ' + this._treeGrove[i]._age;
      arr.push(result);
     }
    console.log(arr);
  }

  showTrees() {
    let result = [];
    for (let i = 0; i < this._treeGrove.length; i++) {
      result.push(this._treeGrove[i].constructor.name);
    }
    console.log(`pohon-pohon yang ada di taman: ${result}`);
  }

  showMatureTrees() {
    let result = [];
    for (let i = 0; i < this._treeGrove.length; i++) {
      if (this._treeGrove[i]._age === this._treeGrove[i].matureAge) {
        result.push(this._treeGrove[i].constructor.name)
      }
    }
    console.log(`pohon yang sudah mature: ${result}`);
  }

  showDeadTrees() {
    let result = [];
    let counter = 0;
    for (let i = 0; i < this._treeGrove.length; i++) {
      if (this._treeGrove[i].age === this._treeGrove[i].dyingAge) {
        result.push(this._treeGrove[i].constructor.name);
        this.TreeGrove[i].healthStatus = false;
        counter++;
      }
    }

    if (counter === 0) {
      result = 0;
    }
    console.log(`pohon yang sudah mencapai akhir hidupnya: ${result}`);
  }
}

var grove = new TreeGrove()
// input your trees data !
// parameter ke-1: nama pohon
// parameter ke-2: umur pohon ketika ditanam di taman tersebut
// pamareter ke-3: tinggi pohon pertama kali ketika ditanam di taman tersebut
// parameter ke-4: umur mature pohon tersebut
// parameter ke-5: healthStatus dari pohon tersebut ketika ditanam
grove.inputTree("MangoTree", 3, 1.8, 7, true)
grove.inputTree("MangoTree", 5, 2.4, 12 ,true)
grove.inputTree("AppleTree", 4, 1.2, 5, true)
grove.inputTree("PearTree", 7, 2, 15, true)

// next year
grove.nextYear()

// // show trees ages
grove.showAges()

// // show trees
grove.showTrees()

// // show trees
grove.showMatureTrees()

// // show trees
grove.showDeadTrees()
