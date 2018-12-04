const MangoTree = require('./MangoTree.js');
const AppleTree = require('./AppleTree.js');
const PearTree = require('./PearTree.js');

class TreeGrove {
  constructor() {
    this._tree = [];
  }

  get tree () {
    return this._tree;
  }

  inputTree(fruitName, agePlant, height, matureAge, healthStatus) {
    let tree = null;
    if (fruitName === 'MangoTree') {
      tree = new MangoTree(fruitName, agePlant, height, matureAge, healthStatus);
    } else if (fruitName === 'AppleTree') {
      tree = new AppleTree(fruitName, agePlant, height, matureAge, healthStatus);
    } else if (fruitName === 'PearTree') {
      tree = new PearTree(fruitName, agePlant, height, matureAge, healthStatus);
    }
    this._tree.push(tree);
  }

  nextYear() {
    this._tree.forEach( e => {
      e.grow();
      e.produceFruits();
      e.harvest();
    });
  }

  showAges() {
    console.log(`Show Ages`);
    this._tree.forEach( e => {
      console.log(e.fruitName, e.age);
    });
  }

  showTrees() {
    console.log(`\nShow Trees`);
    this._tree.forEach( e => {
      if(e.healthStatus) {
        console.log(e.fruitName);
      }
    });
  }

  showMatureTrees() {
    console.log(`\nShow Mature Trees`);
    this._tree.forEach( e => {
      if(e.harvested) {
        console.log(e.fruitName);
      }
    });
  }

  showDeadTrees() {
    console.log(`\nShow Dead Trees`);
    this._tree.forEach( e => {
      if(!e.healthStatus) {
        console.log(e.fruitName);
      }
    });
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
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()
// console.log(grove.tree);
//
// // show trees ages
grove.showAges()
//
// // show trees
grove.showTrees()
//
// // show trees
grove.showMatureTrees()
//
// // show trees
grove.showDeadTrees()
