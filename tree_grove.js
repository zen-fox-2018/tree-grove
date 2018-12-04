const MangoTree = require('./mango_tree.js').MangoTree;
const AppleTree = require('./apple_tree.js').AppleTree;
const PearTree = require('./pear_tree.js').PearTree;

class TreeGrove {
  constructor(treeName, ageStart, heightStart, matureAge, healthStatus){
    this.treeObjects = [];
  }

  inputTree(treeName, ageStart, heightStart, matureAge, healthStatus){
    if (treeName == 'MangoTree') {
      this.treeObjects.push(new MangoTree(ageStart, heightStart, matureAge, healthStatus))
    }
    else if (treeName == 'AppleTree') {
      this.treeObjects.push(new AppleTree(ageStart, heightStart, matureAge, healthStatus))
    }
    if (treeName == 'PearTree') {
      this.treeObjects.push(new PearTree(ageStart, heightStart, matureAge, healthStatus))
    }
  }

  nextYear(){
    for (var i = 0; i < this.treeObjects.length; i++) {
      this.treeObjects[i].grow();
    }
  }

  showAges(){
    console.log('Tree Ages : ');
    for (var i = 0; i < this.treeObjects.length; i++) {
      console.log(this.treeObjects[i].constructor.name+ ' : ' +this.treeObjects[i].age);
    }
  }

  showTrees(){
    console.log('Trees :');
    for (var i = 0; i < this.treeObjects.length; i++) {
      console.log(this.treeObjects[i].constructor.name);
    }
  }

  showMatureTrees(){
    console.log('Mature Trees :');
    for (var i = 0; i < this.treeObjects.length; i++) {
      if (this.treeObjects[i].age > this.treeObjects[i].matureAge) {
        console.log(this.treeObjects[i].constructor.name);
      }
    }
  }

  showDeadTrees(){
    console.log('Dead Trees :');
    for (var i = 0; i < this.treeObjects.length; i++) {
      if (this.treeObjects[i].healthStatus === false) {
        console.log(this.treeObjects[i].constructor.name);
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



// show trees ages
grove.showAges()

// show trees
grove.showTrees()

// show trees
grove.showMatureTrees()

// show trees
grove.showDeadTrees()
