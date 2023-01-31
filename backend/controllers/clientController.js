const Client = require('../models/client')
const mongoose = require('mongoose')

// get all clients
const getClients = async (req,res) => {
    const clients = await Client.find({}).sort({createdAt: -1})
    res.status(200).json(clients)
}

// get single client
const getClientById = async (req,res) => {
    const {id} = req.params
    //validate id
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'invalid id'})
      }  
      //get client  
    const client = await Client.findById(id)
      //return error if not found
    if(!client) {
        return res.status(404).json({error: "no such client"})
    }
    res.status(200).json(client)
}

// post a new client
const createClient = async(req,res) => {
    const {firstName,lastName,insuranceCompany,policyNum} = req.body
   //add to db
    try {
          const thisclient = await Client.create({firstName,lastName,insuranceCompany,policyNum})
          res.status(200).json(thisclient)
    } catch(error){
        res.status(400).json({error: error.message})
    }
}

const deleteClient = async (req, res) => {
//delete a client
const {id} = req.params
     if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'invalid id'})
      } 
      const client = await Client.findOneAndDelete({_id: id})
      res.status(200).json(client)
    
}
 
//update a client


const updateClient = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
       return res.status(404).json({error: 'invalid id'})
     } 
     const client = await Client.findOneAndUpdate({_id: id},{
        ...req.body
     })


     if(!client) {
        return res.status(404).json({error: "no such client"})
    }
    
    const updatedClient = await Client.findById(id)
    res.status(200).json(updatedClient)

}

module.exports={createClient,getClients,getClientById,deleteClient,updateClient}