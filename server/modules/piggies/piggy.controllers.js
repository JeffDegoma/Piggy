import Piggy from './piggy.model.js'

export  async function getPiggies(req, res) { //callback
    //try catch to fetch piggy info from database
    try {
        const piggy =  await Piggy.find()
        console.log(piggy)
        res.status(200).json(piggy)
    }   catch (error)   {
        console.log("Whoops,", error)
    }
}

//create your own piggy
export async function createPiggy(req, res) {
    let name = req.body.name
    try {
        let piggy = await Piggy.findOne({name})
        if(piggy){
            console.log(`${piggy.name} already exists!`)
            res.json(piggy)
        } else {
            piggy =  new Piggy(req.body)
            piggy.save()
            console.log(`${piggy.name} is added!`)
            res.json(piggy)
        }
    }   catch (error)   {
        console.log("Piggy not created..error here -->", error)
    }
}

