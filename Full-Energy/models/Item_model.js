const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    title: {
        type: String,
        required: [true,"Please add the title of the item"],
        maxlength:[255, "Too many characters"]      

    },
    description: {
        type: String,
        required:[true,"Please add the description of the item"]
    },
    category_id:{
        type: String,
        required: [true,"Please add the category of the item"]
    },
    price:{
        type: Number,
        required: [true,"Please add the price of the item"]
    },
    sell_price: {
        type: Number
    },
    quantity: {
        type: Number,
        required:[true,"Please add the quantity of the item"],
        default:0
    },
    first_stock: {
        type: Date,
        default: Date.now
    },
    updated_stock: {
        type: Date,
        default: Date.now
    },  
    has_review:{
        type:Boolean,
        default:false
    },
    image_1:{
        type:String,
        required: [true,"Please add the first image of the item"]
    },
    image_2:{
        type:String
    },
    image_3:{
        type:String
    },
    created_date: {
        type: Date,
        default: Date.now
    },
    foudnd_at: {
        type: String,
        maxlength:[255, "Too many characters"]      
    },
    provider_id:{
        type:String
    },
});

module.exports = Item = mongoose.model('item',ItemSchema);