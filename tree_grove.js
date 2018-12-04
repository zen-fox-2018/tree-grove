const MangoTree = require('./MangoTree.js');
const AppleTree = require('./AppleTree.js');
const PearTree = require('./PearTree.js');


class TreeGrove {
    constructor() {
        this._pohonDiGrove = []
       
    }
    get pohonDiGrove() {
        return this._pohonDiGrove
    }
    
    inputTree(name, CurrentAge, CurrentHeight, AgeMature, CurrentHealthStatus) {
        if(name == 'MangoTree'){
            this._pohonDiGrove.push(new MangoTree(CurrentAge, CurrentHeight, AgeMature, CurrentHealthStatus))
        }else if(name == 'AppleTree'){
            this._pohonDiGrove.push(new AppleTree(CurrentAge, CurrentHeight, AgeMature, CurrentHealthStatus))
        }else if(name == 'PearTree'){
            this._pohonDiGrove.push(new PearTree(CurrentAge, CurrentHeight, AgeMature, CurrentHealthStatus))
        }
    }
    nextYear() {
        for(let i =0 ; i < this._pohonDiGrove.length;i++){
            if (this._pohonDiGrove[i]._healthStatus != false) {
                this._pohonDiGrove[i].grow()
                this._pohonDiGrove[i].produceFruits()
                this._pohonDiGrove[i].harvest()
            }
        }
    }
    showAges () {
        console.log('--------------Umur Pohon-----------')
        for(let i = 0;i <this._pohonDiGrove.length; i++){
            console.log(`Pohon ${i + 1} dengan umur ${this._pohonDiGrove[i].age} `)
        }
    }
    showTrees () {
        console.log('--------------Nama Pohon-----------')
        for(let i = 0;i <this._pohonDiGrove.length; i++){
            console.log(`Pohon ${i + 1} dengan nama ${this._pohonDiGrove[i].constructor.name} `)
        }
    }
    showMatureTrees () {
        console.log('-------Pohon yang sudah dewasa-----')
        for(let i = 0;i <this._pohonDiGrove.length; i++){
            if(this._pohonDiGrove[i].age >= this._pohonDiGrove[i]._matureAge){
                console.log(`Pohon ${i + 1} sudah dewasa dan dapat berbuah `)
            }
        }
    }
    showDeadTrees () {
        console.log('-------Pohon yang sudah Mati------')
        for(let i = 0;i <this._pohonDiGrove.length; i++){
            if(this._pohonDiGrove[i]._healthStatus == false){
                console.log(`Pohon ${i + 1} sudah mati `)
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
grove.inputTree("PearTree", 3, 2, 15, false)

//console.log(grove.pohonDiGrove)

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
