const MangoTree = require('./mango_tree.js');
const AppleTree = require('./appletree.js');


class TreeGrove {
    constructor() {
        this.listTree = []
        this.listAge = []
        this.listname = []
        this.listMature = []
        this.listDead = []
    }

    inputTree (nama, umur, tinggi, matureAge, healthstatus) {
        if(nama == 'MangoTree'){
            let tree = new MangoTree (nama, umur, tinggi, matureAge, healthstatus)
            this.listTree.push(tree)
        }else if (nama == 'AppleTree') {
            let tree = new AppleTree (nama, umur, tinggi, matureAge, healthstatus)
            this.listTree.push(tree)
        }else if (nama == 'PearTree'){
            let tree = new PearTree (nama, umur, tinggi, matureAge, healthstatus)
            this.listTree.push(tree)
        }
        
    }

    nextYear() {
        for(let i = 0; i < this.listTree.length; i++) {
            this.listTree[i].grow()
        }
    }

    showAges () {
        for(let i = 0; i < this.listTree.length; i++) {
            this.listAge.push(this.listTree[i]._age)
        }
        console.log(this.listAge)
    }

    showTrees () {
        for(let i = 0; i < this.listTree.length; i++) {
            this.listname.push(this.listTree[i].name)
        }
        console.log(this.listname)
    }

    showMatureTrees () {
        for(let i = 0; i < this.listTree.length; i++) {
            if(this.listTree[i]._age >= this.listTree[i].matureAge){
                this.listMature.push(this.listTree[i].name)
            }
        }
        console.log(this.listMature)
    }

    showDeadTrees () {
        for(let i = 0; i < this.listTree.length; i++) {
            if(this.listTree[i]._healthStatus === false) {
                this.listDead.push(this.listTree[i])
            }
        }
        console.log(this.listDead)
    }
}

var grove = new TreeGrove()
// input your trees data !
// parameter ke-1: nama pohon 
// parameter ke-2: umur pohon ketika ditanam di taman tersebut
// pamareter ke-3: tinggi pohon pertama kali ketika ditanam di taman tersebut
// parameter ke-4: umur mature pohon tersebut
// parameter ke-5: healthStatus dari pohon tersebut ketika ditanam
// grove.inputTree("MangoTree", 3, 1.8, 7, true)
// console.log(grove.listTree)
// grove.inputTree("MangoTree", 5, 2.4, 12 ,true)
grove.inputTree("AppleTree", 4, 1.2, 5, true)
// grove.inputTree("PearTree", 7, 2, 15, true)
// console.log(grove.listTree)
// // next year
grove.nextYear()

// // show trees ages
grove.showAges()

// // show trees
grove.showTrees()

// // show trees
grove.showMatureTrees()

// // show trees
grove.showDeadTrees()
console.log(grove.listTree)
