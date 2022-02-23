//Inicialización
const express = require('express')
const invoceClientSchema = require('../models/invoce_client')
const route = express.Router()

//Post
route.post('/invoceclient',(req,res)=>{
    const invoceClient = invoceClientSchema(req.body)
    invoceClient   
        .save()
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message: error}))
})
//Get all
route.get('/invoceclients',(req,res)=>{
    invoceClientSchema  
        .find()
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message: error}))
})
//Get by id
route.get('/invoceclient/:id',(req,res)=>{
    const {id} = req.params
    invoceClientSchema  
        .findById(id)
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message: error}))
})
//Delete
route.delete('/invoceclient/:id',(req,res)=>{
    const {id} = req.params
    invoceClientSchema  
        .remove({_id: id})
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message: error}))
})
//Edit
route.put('/invoceclient/:id',(req,res)=>{
    const {id} = req.params
    const {name, lastname, address, contact} = req.body
    invoceClientSchema  
        .updateOne({_id: id},{$set:{name, lastname, address, contact}})
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message: error}))
})
module.exports = route