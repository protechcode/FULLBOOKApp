const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { isEmail } = require('validator');

const ProviderSchema = new Schema({
    name_1:{
        type: String,
        required: [true, 'Please enter Valid Name for the Provider you are creating'],

    },
    name_2:{
        type: String,
        required: false        
    },
    email:{
        type: String,
        required: [true, 'Please enter a valid email example@ex.com '],
        unique: true,
        lowercase: true,
        validate:[isEmail, 'Please enter a valid email example@ex.com ']
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
        required: false,
        maxlength:[255]      
    },
    postal_code:{
        type: Number,
        required: false,
              
    },
   city:{
        type: String,
        required: [true, 'Required field city'],
        maxlength:[255]      
    },
    country:{
        type: String,
        required: [true, 'Required field country'],
        maxlength:[255]      
    },
    fiscal_id:{
        type: String,
        required: [true, 'Required field country'],
        maxlength:[255]      
    },    
    created_at:{
        type: Date,
        default: Date.now
    },
    updated_at:{
        type: Date,
        default: Date.now
    },
    



})
module.exports = Provider = mongoose.model('provider',ProviderSchema);