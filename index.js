const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const routes = require('./routes')


const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', routes)

mongoose.connect(process.env.MONGO_DB, { useNewUrlParser: true }, (error, response)=>{
    if (error) {
        console.log(`Error al conectar a la base de datos. ${error}`)
    }
    console.log(`Conexión a la base de datos Mongo establecida ${process.env.MONGO_DB}`)
    app.listen(process.env.PORT, (error)=>{
        if (error) {
            console.log(`Error al levantar el servidor ${error}`)
        } else {
            console.log(`Servidor levantado en el puerto ${process.env.PORT}`)
        }
    })
})