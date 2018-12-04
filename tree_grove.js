const MangoTree = require('./mango_tree.js');
const AppleTree = require('./apple_tree.js');
const PearTree = require('./pear_tree.js');
const FruitTree = require('./fruit_tree.js');

class TreeGrove {
    constructor(){
        this.listOfTrees = []
    }

    inputTree(name, age, height, matureAge, healthStatus){
        if(name == 'MangoTree'){
            this.listOfTrees.push(new MangoTree(name, age, height, matureAge, healthStatus))
        }
        else if (name == 'AppleTree'){
            this.listOfTrees.push(new AppleTree(name, age, height, matureAge, healthStatus))
        }
        else if (name  == 'PearTree'){
            this.listOfTrees.push(new PearTree(name, age, height, matureAge, healthStatus))
        }
    }

    nextYear(){
        for( let i = 0; i< this.listOfTrees.length; i++){
            this.listOfTrees[i].grow()
        }
    }

    showAges(){
        console.log("\n" + 'tree ages:')

        for( let i = 0; i< this.listOfTrees.length; i++){
            console.log(this.listOfTrees[i]._age)
        }
    }

    showTrees(){
        console.log("\n" + 'list of trees')
        for( let i = 0; i< this.listOfTrees.length; i++){
            console.log(this.listOfTrees[i]._name)
        }
    }

    showMatureTrees(){
        console.log("\n" + 'mature trees:')
        for( let i = 0; i< this.listOfTrees.length; i++){
            if(this.listOfTrees[i]._age >= this.listOfTrees[i]._matureAge){
                console.log(this.listOfTrees[i]._name)
            }
        }
    }

    showDeadTrees(){
        console.log("\n" + 'dead trees:')
        for( let i = 0; i< this.listOfTrees.length; i++){
            if(this.listOfTrees[i]._age >= this.listOfTrees[i]._deathAge){
                console.log(this.listOfTrees[i]._name)
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

// show trees ages
grove.showAges()

// // show trees
grove.showTrees()

// // show trees
grove.showMatureTrees()

// // show trees
grove.showDeadTrees()



module.exports = TreeGrove