const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    user_id: {
        type: String,
    },
    items: [{
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
       
    }],
    payment_method:{
        type: String,
        default: "Credit Card"
    },
    card_company:{
        type:String,
        default:"Visa"
    },
    total: {
        type: Number,
        required: true
    },
    created_date: {
        type: Date,
        default: Date.now
    },
    updated_date: {
        type: Date,
        default: Date.now
    }
})

module.exports = Order = mongoose.model('order',OrderSchema);