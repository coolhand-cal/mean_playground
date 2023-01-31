//express router
const express = require('express')
const Client = require('../models/client')


const {
   createClient,getClients,getClientById,deleteClient,updateClient
} = require('../controllers/clientController')

const router = express.Router()
 
//middleware


 //get all clients

 router.get('/',getClients)

 
 //get client by mr #
 router.get('/:id',getClientById)

 //add new client
router.post('/', createClient)

//delete client by mr#
router.delete('/:id', deleteClient)
//update client by mr#
router.patch('/:id', updateClient)

//export router 
module.exports = router