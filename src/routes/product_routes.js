//Inicialización
const express = require('express')
const productSchema = require('../models/product')
const route = express.Router()

//Post
route.post('/product',(req,res)=>{
    const product = productSchema(req.body)
    product   
        .save()
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message: error}))
})
//Get all
route.get('/products',(req,res)=>{
    productSchema  
        .find()
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message: error}))
})
//Get by Id
route.get('/product/:id',(req,res)=>{
    const {id} = req.params
    productSchema  
        .findById(id)
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message: error}))
})
//Delete
route.delete('/product/:id',(req,res)=>{
    const {id} = req.params
    productSchema  
        .remove({_id: id})
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message: error}))
})
//Edit
route.put('/product/:id',(req,res)=>{
    const {id} = req.params
    const {product_name, price, image} = req.body
    productSchema  
        .updateOne({_id: id},{$set:{product_name, price, image}})
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message: error}))
})
module.exports = route
