const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { isEmail } = require('validator');

const ReviewSchema = new Schema({

        
    item_id:{
        type: String,
        required:[true, 'No Item Id']
    },
    user_id:{
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
        type: Number,
        required:[true, 'No title'],
        deafult: 5
    },
   
   
   



})
module.exports = Review = mongoose.model('review',ReviewSchema);