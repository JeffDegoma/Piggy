import express from 'express'
const router = express.Router()
//import controllers
import * as Piggy_controllers from './piggy.controllers.js' //import callback functions

//get piggies
router.get('/getPiggies', Piggy_controllers.getPiggies)

//create your own piggy
router.post('/createPiggy', Piggy_controllers.createPiggy)


export default router;