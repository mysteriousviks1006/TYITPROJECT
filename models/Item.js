const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true 
    },
    salePrice:{
        type: Number,
        required: true
    },
    discount:{
        type: Number,
        required: true
    },
    pictures:{
        type: Array,
        required: true
    },
    shortDetails:{
        type: Array,
        required: true
    },
    description:{
        type: Array,
        required: true
    },
    stock:{
        type: Number,
        required: true 
    },
    new: {
        type: Boolean, 
        required: true
    },
    sale: {
        type: Boolean,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    colors:{
        type: Array,
        required: true
    },
    size:{
        type: Array,
        required: true 
    },
    tags:{
        type: Array,
        required: true 
    },
    varients:{
        type: Array,
        required: true 
    },
});

module.exports = Item = mongoose.model('item', ItemSchema);
