//Conexión con base de datos
const mongoose = require('mongoose')

//Declaraciónd de esquema de Invoce Client
const invoce_client_schema = mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    lastname:{
        type: String,
        require: true
    },
    address:{
        city:{
            type: String,
            require: true
        },
        code_zip:{
            type: String,
            require: true
        },
        street:{
            type: String,
            require: true
        }
    },
    contact:{
        telephone:{
            type: String,
            require: true
        },
        email:{
            type: String,
            require: true
        }
    }
})

//Eportar modelo a base de datos
module.exports = mongoose.model('invoce_client_document', invoce_client_schema)