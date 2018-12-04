const MangoTree = require('./mango_tree.js');
const AppleTree = require('./apple_tree.js');
const PearTree = require('./pear_tree.js');

class TreeGrove {
  constructor() {
    this.trees = []
  }

  inputTree(treeName, treeAge, treeHeight, treeMatureAge, treeHealthStatus) {
    if (treeName === "MangoTree") {
      this.trees.push(new MangoTree(treeAge, treeHeight, treeMatureAge, treeHealthStatus))
    }
    else if (treeName === "AppleTree") {
      this.trees.push(new AppleTree(treeAge, treeHeight, treeMatureAge, treeHealthStatus))
    }
    else if (treeName === "PearTree") {
      this.trees.push(new PearTree(treeAge, treeHeight, treeMatureAge, treeHealthStatus))
    }
  }

  nextYear() {
    for (let i = 0; i < this.trees.length; i++) {
      this.trees[i].age++
      this.trees[i].height = this.trees[i].height + Math.floor(Math.random()*2)
      if (this.trees[i].age === this.trees[i].deadAge) {
        this.trees[i].healthStatus = false
      }
    }
  }

  showAges() {
    this.trees.forEach(function(tree) {
      if (tree.healthStatus === true) {
        console.log(`${tree.name} berumur ${tree.age}`);
      }
    })
  }

  showTrees() {
    this.trees.forEach(function(tree) {
      console.log(`${tree.name}`);
    })
  }

  showMatureTrees() {
    this.trees.forEach(function(tree) {
      if (tree.age >= tree.matureAge && tree.healthStatus === true) {
        console.log(`${tree.name} sedang berbuah`);
      }
    })
  }

  showDeadTrees() {
    this.trees.forEach(function(tree) {
      if (tree.age >= tree.deadAge) {
        console.log(`${tree.name} sudah meninggal`);
      }
    })
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

// show trees ages
grove.showAges()

// show trees
grove.showTrees()

// show trees
grove.showMatureTrees()

// show trees
grove.showDeadTrees()
