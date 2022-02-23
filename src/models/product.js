//Conexión con base de datos
const mongoose = require('mongoose')

//Declaración de esquema de Product
const product_schema = mongoose.Schema({
    product_name:{
        type: String,
        require: true
    },
    price:{
        type: Number,
        require: true
    },
    image:{
        type: String,
        require: true
    }
})

module.exports = mongoose.model('product_document', product_schema)