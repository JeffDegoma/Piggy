import mongoose from 'mongoose'

mongoose.Promise = global.Promise;

try {
    mongoose.connect(`mongodb://mongo/piggy`, { //mongo maps to docker service. change when running locally
        keepAlive: true
    })
}   catch(err)  {
    mongoose.createConnection(`mongodb://mongo/piggy`)
}

mongoose.connection
    .once('open', () => console.log(`MongoDB running. better catch it.`))
    .on('error', e => {throw e})

    