//piggy schema
import mongoose from 'mongoose'
const {Schema} = mongoose //module type in package.json


//collection
const PiggySchema = new Schema({
    name: {
        type:       String,
        required:     true
    },
    weapon: {
        type:       String,
        required:     true,
    }
})

export default mongoose.model("Piggy", PiggySchema)