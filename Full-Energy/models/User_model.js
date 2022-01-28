const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { isEmail } = require('validator');

const UserSchema = new Schema({
    name:{
        type: String,
        required: [true, 'Please enter Valid Name for the user you are creating'],

    },
    surname:{
        type: String,
        //required: [true, 'Please enter Valid Surname for the user you are creating'],        
    },
    email:{
        type: String,
        required: [true, 'Please enter a valid email example@ex.com '],
        unique: true,
        lowercase: true,
        validate:[isEmail, 'Please enter a valid email example@ex.com ']
    },
    password:{
        type: String,
        required:[true, 'Please enter a valid password '],
        minlength:[6, 'Minimun of 6 characters for a valid password']
    },
    phone:{
        type: String,
        required:false,
        minlength:[9, 'Minimun of 9 numbers with no symbols for a valid phone number']
    }, 
    address_1:{
        type: String,
        required: false,
        maxlength:[255, "Too many characters, must insert in new line the rest of your Address"]      
    },
    address_2:{
        type: String,
        //required: false,
        maxlength:[255]      
    },
    is_admin:{
        type: Boolean,
        default: false,            
    },
    created_at:{
        type: Date,
        default: Date.now
    },
    updated_at:{
        type: Date,
        default: Date.now
    },
    image_url: {
        type: String,
        required: false,
    },
    has_cart:{
        type: Boolean,
        default: false,            
    },
    has_purchase:{
        type: Boolean,
        default: false,            
    },



})
module.exports = User = mongoose.model('user',UserSchema);