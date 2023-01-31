require ('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')

//attach routers
const clientRouter = require('./routes/clientsRouter')

// express app
const app = express()


//middleware
app.use(express.json())

//log requests
app.use((req,res,next)=>{
    console.log('we in the middle')
    console.log(req.path, " + ", req.method)
    next()
})

// router

app.use('/api/clients',clientRouter)

//Connect to database
mongoose.connect(process.env.MONGO_URL)
.then(()=>{

    // listen for requests
app.listen(process.env.PORT, () => {
    console.log('now listening on port',process.env.PORT); 
})

})
.catch((error)=>{
    console.log('we have a prob')
    console.log(error)
})


