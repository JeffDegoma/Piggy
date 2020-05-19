import mongoose from 'mongoose'

mongoose.Promise = global.Promise;

try {
    mongoose.connect(`mongodb://${process.env.NODE_ENV}/oinkers`, { //process.env.NODE_ENV maps to docker service. 
        keepAlive: true
    })
}   catch(err)  {
    mongoose.createConnection(`mongodb://${process.env.NODE_ENV}/oinkers`)
}

mongoose.connection
    .once('open', () => console.log(`MongoDB running. better catch it.`))
    .on('error', e => {throw e})

    