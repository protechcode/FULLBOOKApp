const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SizeSchema = new Schema({
    item_id:{
        type: String,
        required: [true, "The ID of this product isn't valid"]

    },
    name:{
        type: String,
        required: [true, "The size isn't valid"]        
    },
    quantity:{
        type: Number,
        required: false,
    },
});

module.exports = Size = mongoose.model('size',SizeSchema);