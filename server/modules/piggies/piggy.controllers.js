import Piggy from './piggy.model.js'

export  async function getPiggies(req, res) { //callback
    //try catch to fetch piggy info from database
    try {
        const piggy =  await Piggy.find()
        res.status(200).json(piggy)
    }   catch (error)   {
        console.log("Whoops,", error)
    }
}

//create your own piggy
export async function createPiggy(req, res) {
    let name = req.body.name
    let weapon = req.body.weapon
    try {
        let piggy = await Piggy.findOne({name})
        if(piggy){
            console.log(`${piggy.name} already exists!`)
            res.json(piggy)
        } else {
            piggy =  new Piggy({name, weapon}) 
            piggy.save()
            console.log(`${piggy.name} is added!`)
            res.json(piggy)
        }
    }   catch (error)   {
        console.log("Piggy not created..error here -->", error)
    }
}

// export async function deletePiggy(req, res) {
//     let name = req.body.name
//     let weapon = req.body.weapon
//     try {
//         let piggy = await Piggy.findOne({name})
        
//     }
// }