const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let ProductSchema = new Schema({
    description : { type:String, required: [true, 'La descripcion es requerida'] },
    date : { type:Date, required: false },
    price : { type:String, required:[true, 'El precio es requerido'] },
    amount : { type:Number, required: false },
    img : { type:String, required: false }
});

module.exports = mongoose.model('product', ProductSchema);