//express router
const express = require('express')

const router = express.Router()
 
//middleware


 //get all clients

 router.get('/', (req,res) => {
    console.log("so far so ood")
    res.json({mss: 'get all clients'})
 })
 
 //get client by mr #
 router.get('/:id', (req,res) => {
   console.log("woah this is nice")
   res.json({mssg: 'this client is??'})
})

 //add new client
router.post('/', (req,res) => {
   console.log("so far so ood")
   res.json({mss: 'post new clients'})
})

//delete client by mr#
router.delete('/:id', (req,res) => {
   console.log("woah this is nice")
   res.json({mssg: 'delete this client is??'})
})
//update client by mr#
router.patch('/:id', (req,res) => {
   console.log("woah this is nice")
   res.json({mssg: 'update this client is??'})
})

//export router 
module.exports = router