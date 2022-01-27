const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const item = require('./Item_model');


const CartSchema = new Schema({

        
    user_id:{
        type: String,
        required:[true, 'Please provide User ._id ']
    },
    items_id:{
        type: [ItemSchema],
        required: false
    },
    purchased:{
        type: Boolean,
        default: false
    }, 
    subtotal:{
        type: Number,
        default:0
    }
    



})
module.exports = Cart = mongoose.model('cart',CartSchema);