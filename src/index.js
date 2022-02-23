//Instalación e instanciación de Express
const express = require ('express')
const app = express()

//Instalación e instanciación de Mongoose
const mongoose = require('mongoose')

//Acceso al puerto del servidor
const port = process.env.PORT || 3000
require('dotenv').config()
app.listen(port,()=>console.log('server listening on port', port))

//Enviar mensaje de prueba
app.get('/',(req,res)=>res.send('Proyecto de Desarrollo de Software'))   

//Conexión con Base de Datos
mongoose
    .connect(process.env.MONGODB_CONNECTION_STRING)
    .then(()=>console.log('Connection with MongoDB'))
    .catch((error)=>console.error(error))

const invoceClientSchemaRoutes = require('./routes/invoce_client_routes')
//Middleware
app.use(express.json())
app.use('/dashboard',invoceClientSchemaRoutes)

const productSchemaRoutes = require('./routes/product_routes')
//Middleware
app.use(express.json())
app.use('/dashboard',productSchemaRoutes)

