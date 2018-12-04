const MangoTree = require('./mango_tree.js');
const AppleTree = require('./apple_tree.js');
const PearTree = require('./pear_tree.js');

class TreeGrove {

  constructor() {
    this._listTree = []
  }

  get listTree() {
    return this._listTree
  }

  set listTree(tree) {
    this.listTree.push(tree)
  }

  inputTree(name, earlyAge, earlyHeight, matureAge, healthStatus) {
    let tree = null
    if ( name === 'MangoTree') {
      tree = new MangoTree( earlyAge, earlyHeight, matureAge, healthStatus )
    } else if ( name === 'AppleTree') {
      tree = new AppleTree( earlyAge, earlyHeight, matureAge, healthStatus )
    } else if ( name === 'PearTree') {
      tree = new PearTree( earlyAge, earlyHeight, matureAge, healthStatus )
    }

    this.listTree = tree
  }

  showAges() {
    let string = ''
    for ( let i = 0 ; i < this.listTree.length ; i++ ) {
      string += `${i+1}. ${this.listTree[i].name} age : ${this.listTree[i].age}`
      if (i !== this.listTree.length - 1) {
        string += '\n'
      }
    }
    console.log('=== Ages of all trees');
    console.log(string);
  }

  showTrees() {
    let string = []
    for ( let i = 0 ; i < this.listTree.length ; i++ ) {
      string.push(`${i+1}. ${this.listTree[i].name}`)
    }
    string = string.join('\n')
    console.log('=== Names of all trees');
    console.log(string);
  }

  showMatureTrees() {
    let string = []
    for ( let i = 0 ; i < this.listTree.length ; i++ ) {
      if (this.listTree[i].age >= this.listTree[i].matureAge) {
        string.push(`${this.listTree[i].name} no. ${i+1}`)
      }
    }
    string = string.join('\n')
    console.log('=== Trees at Mature Age');
    console.log(string);
  }

  showDeadTrees() {
    let string = []
    for ( let i = 0 ; i < this.listTree.length ; i++ ) {
      if (this.listTree[i].healthStatus === false) {
        string.push(` ${this.listTree[i].name} with no. ${i+1}`)
      }
    }

    string = string.join('\n')
    console.log('=== List of Sad Trees');
    console.log(string);
  }

  nextYear() {
    for ( let i = 0 ; i < this.listTree.length ; i++ ) {
      this.listTree[i].grow()
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
grove.inputTree("MangoTree", 3, 1.8, 7, true) //
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



// show trees ages
grove.showAges()

// show trees
grove.showTrees()

// show trees
grove.showMatureTrees()

// show trees
grove.showDeadTrees()
