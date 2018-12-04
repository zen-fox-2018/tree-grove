const MangoTree = require('./MangoTree');
const AppleTree = require('./AppleTree');
const PearTree = require('./PearTree');

class TreeGrove {
  constructor() {
    this._trees = []
  }

  inputTree(name , age , height , mature , health){
    if (name == 'MangoTree') {
      this._trees.push(new MangoTree(age, height , mature , health))
    } else if (name == 'AppleTree') {
      this._trees.push(new AppleTree(age, height , mature , health))
    } else if (name == 'PearTree') {
      this._trees.push(new PearTree(age, height , mature , health))
    }
  }

  showAges() {
    this._trees.forEach(x => {
      console.log(`${x.name} age is : ${x.age}`)
    })
  }

  nextYear() {
    this._trees.forEach(tree => {
      tree.grow()
    })
  }

  showTrees() {
    this._trees.forEach(tree => {
      console.log(`~ ${tree.name}`)
    })
  }

  showMatureTrees() {
    console.log(`Mature tree : `)
    this._trees.forEach(tree => {
      if (tree.age == tree._mature) {
        console.log(`~ ${tree.name} \n`)
      }
    })
  }

  showDeadTrees() {
    console.log(`Dead tree: `)

    this._trees.forEach(tree => {
      if (tree.age == tree._died) {
        console.log(`~ ${tree.name}\n`)
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
console.log(grove._trees)

// next year
grove.nextYear()
console.log(grove._trees)
// show trees ages
grove.showAges()
console.log('==========================')
// // show trees
grove.showTrees()
console.log('==========================')
// // show trees
grove.showMatureTrees()
console.log('==========================')
// // show trees
grove.showDeadTrees()
