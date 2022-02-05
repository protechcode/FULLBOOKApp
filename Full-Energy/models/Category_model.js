const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
   nameCat: {
        type: String,
        required: [true,"Please add the name of the category"],
        maxlength:[255, "Too many characters"]      

    },
    description: {
        type: String,
        required:false
    },
    parent_id:{
        type: String,
        required: [true,"Please add the parent of the category"],
        default:"0"
    },
    image_1:{
        type:String,
        required: [true,"Please add the first image of the category"],
        default:"prefix://url-of-image.extension/"
    },
    image_2:{
        type:String,
        required: false,
    },
    image_3:{
        type:String,
        required: false,
    },
    created_date: {
        type: Date,
        default: Date.now
    },
    
});

module.exports = Category = mongoose.model('category',CategorySchema);