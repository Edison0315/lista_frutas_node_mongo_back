const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Configuraciones para el SVR para que reciba el urlencoded y JSON

app.use(cors());

app.use(bodyParser.urlencoded({ extended:false }));

app.use(bodyParser.json());

app.use(express.static('./uploads'));

// Se importa el archivo de rutas
app.use(require('./src/routes/Routes'));

mongoose.connect('mongodb://localhost:27017/products', (err) => {
    if(err) throw err;
    console.log("Base de datos ONLINE");
});

app.listen(3000, (err) => {
    if(err) throw err;
    console.log("Servidor ONLINE"); 
});
