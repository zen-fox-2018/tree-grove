const MangoTree = require('./mango_tree.js').MangoTree;
const AppleTree = require('./apple_tree.js').AppleTree;
const PearTree = require('./pear_tree.js').PearTree;

class TreeGrove {
   constructor() {
     this._allTrees = []
   }
   get allTrees() {
     return this._allTrees
   }
   set allTrees(input) {
     this._allTrees.push(input)
   }

   inputTree(name, startingAge, startingHeight, matureAge, healthStatus) {
     if (name === 'MangoTree') {
       this.allTrees = new MangoTree(startingAge, startingHeight, matureAge, healthStatus)
     } else if (name === 'AppleTree') {
       this.allTrees = new AppleTree(startingAge, startingHeight, matureAge, healthStatus)
     } else if (name === 'PearTree') {
       this.allTrees = new PearTree(startingAge, startingHeight, matureAge, healthStatus)
     }
   }

   nextYear() {
     for (let i = 0; i < this.allTrees.length; i++) {
       this.allTrees[i].grow()
     }
   }

   showAges() {
     for (let i = 0; i < this.allTrees.length; i++) {
       console.log(this.allTrees[i].age);
     }
   }

   showTrees() {
    for (let i = 0; i < this.allTrees.length; i++) {
      console.log(this.allTrees[i])
    }
   }

   showMatureTrees() {
     for (let i = 0; i < this.allTrees.length; i++) {
        if (this.allTrees[i].age >= this.allTrees[i].matureAge) {
          console.log(`${this.allTrees[i].name} is ready to be harvested`)  
        }
     }
   }

   showDeadTrees() {
    for (let i = 0; i < this.allTrees.length; i++) {
      if (!this.allTrees[i].healthStatus) {
        console.log(`${this.allTrees[i].name} has dead`)
      }
    }
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
grove.inputTree("PearTree", 7, 2, 15, true)
grove.inputTree("AppleTree", 4, 1.2, 5, true)

// next year
// grove.nextYear()
// grove.nextYear()
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
grove.nextYear()
grove.nextYear()


// show trees ages
grove.showAges()

// show trees
grove.showTrees()

// show trees
grove.showMatureTrees()

// show trees
grove.showDeadTrees()
