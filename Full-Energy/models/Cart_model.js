const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const item = require('./Item_model');


const CartSchema = new Schema({

        
    user_id:{
        type: String,
        ref: "user"
    },
    items: [{
        item_id:{
            type: String
        },
        title:{
            type: String
        },
        quantity: {
            type: Number,
            required: true, 
            min: [1, 'Quantity can not be less than 1'],
            default:1
        },
        sell_price:{
            type: Number,
        },
        category_name:{
            type:String
        },
        image_1:{
            type:String
        }
    }],
    purchased:{
        type: Boolean,
        default: false
    }, 
    subtotal:{
        type: Number,
        requires: true,
        default:0
    }
    



})
module.exports = Cart = mongoose.model('cart',CartSchema);