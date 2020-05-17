import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

import  './config/database.js'
import ApiRoutes from './modules/index.js' //ApiRoutes takes in our express app

const app = express()
const PORT = 3000

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

ApiRoutes(app)

app.listen(PORT, (err)=> {
    if(err){
      throw err
    } else {
    console.log(`
    Server running on port ${PORT}
    --- 
    Running on ${process.env.NODE_ENV}
    `)
    }
})