require ('dotenv').config()

const express = require('express')

//attach routers
const clientRouter = require('./routes/clients')

// express app
const app = express()


//middleware

//log requests
app.use((req,res,next)=>{
    console.log('we in the middle')
    console.log(req.path, " + ", req.method)
    next()
})

// route handler

app.use('/api/clients',clientRouter)


// listen for requests
app.listen(process.env.PORT, () => {
    console.log('knoo listening on port 4000');
})

