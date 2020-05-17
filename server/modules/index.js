import PiggyRoutes from './piggies/piggy.routes.js'

export default app => {
    app.use('/api/piggies', PiggyRoutes)
    //add more routes
    app.use('/', (req,res) => res.send('Planet Express Delivery'))
}