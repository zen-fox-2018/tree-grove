const MangoTree = require('./mango_tree.js').MangoTree;
const AppleTree = require('./apple_tree.js').AppleTree;
const PearTree = require('./pear_tree.js').PearTree;

class TreeGrove {
    constructor(){
        // this.mangoTree = new MangoTree()
        // this.appleTree = new AppleTree()
        // this.pearTree = new PearTree()
        this.treeGrove = []
    }

    inputTree(namaPohon, umurPohon, tinggiPohon, maturedAge, healthStatus){
        if(namaPohon === "MangoTree") {
            this.treeGrove.push(new MangoTree(umurPohon, tinggiPohon, maturedAge, healthStatus))
        }
        else if (namaPohon === 'AppleTree') {
            this.treeGrove.push(new AppleTree(umurPohon, tinggiPohon, maturedAge, healthStatus))
        }
        else if (namaPohon === 'PearTree') {
            this.treeGrove.push(new PearTree(umurPohon, tinggiPohon, maturedAge, healthStatus))
        }


    }

    nextYear(){
        for (let i = 0; i < this.treeGrove.length; i++){
            this.treeGrove[i].grow()
        }

    }

    showAges(){
        let show = []
        for(let i = 0; i < this.treeGrove.length;i++){
            let result = `${this.treeGrove[i].constructor.name} is ${this.treeGrove[i].age} year(s) old`
            show.push(result)
        }
        // return show
        console.log(show)

    }

    showTrees(){
        let show = []
        for ( let i = 0; i <this.treeGrove.length; i++){
            let result = `${this.treeGrove[i].constructor.name} name is ${this.treeGrove[i].constructor.name}`
            show.push(result)
        }
        console.log(show)
    }

    showMatureTrees(){
        let show = []
        for ( let i = 0; i <this.treeGrove.length; i++){
            let result = ''
            if (this.treeGrove[i]._matureAge == this.treeGrove[i].age){
                result = `${this.treeGrove[i].constructor.name} is matured at age ${this.treeGrove[i].age}`
            }
            else {
                result = `${this.treeGrove[i].constructor.name} is not yet matured `
            }            
            show.push(result)
        }
        console.log(show)
    }

    showDeadTrees(){
        let show = []
        for ( let i = 0; i < this.treeGrove.length; i++){
            let result = ''
            if(this.treeGrove[i]._witheredAge === this.treeGrove[i].age){
                result = `${this.treeGrove[i].constructor.name} is Dead`
            }
            else {
                result = `${this.treeGrove[i].constructor.name} is still alive`
            }
            show.push(result)
        }
        console.log(show)
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

// console.log(grove.treeGrove)

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


module.exports = TreeGrove
