const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { isEmail } = require('validator');

const ReviewSchema = new Schema({

        
    product_id:{
        type: String,
        required:[true, 'No Item Id']
    },
    parent_id:{
        type: String,
        required:[true, 'No Parent review Id']
    },
    title:{
        type: String,
        required:[true, 'No title']
    },
    rating:{
        type: number,
        required:[true, 'No title'],
        deafult: 5
    },
   
   
   



})
module.exports = Review = mongoose.model('review',ReviewSchema);