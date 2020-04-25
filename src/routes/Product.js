const express = require('express');
const multer = require('multer');

const app = express();

let Product = require('../models/Product');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now()+file.originalname);
    }
});

const upload = multer({ storage: storage });

// En app.post hay 3 parametros
// 1) La ruta
// 2) Middleware que no es requerido
// 3) Callbacks de error o OK

app.get('/product/list', (req, res) => {

    Product.find({})
    .exec((err, productDB) => {
        if(err){
            return res.status(500).json({
                 ok: false,
                 err
            });
        }
        
        return res.status(200).json({
                ok: true,
                productDB
        });
        
    });

});

app.post('/product/create', upload.single('img') , (req, res) => {

    let body = req.body;

    let product = new Product({
        description: body.description,
        date: body.date,
        price: body.price,
        amount: body.amount,
        img: Date.now()+req.file.originalname
    });

   product.save((err, productDB) => {
       if(err){
           return res.status(500).json({
                ok: false,
                err
           });
       }

        return res.status(200).json({
            ok: true,
            productDB
        });

   });

});

module.exports = app;