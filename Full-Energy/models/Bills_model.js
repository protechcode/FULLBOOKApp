const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const BillSchema = new Schema({

        
    received_at:{
        type: Date,
        required:[true, 'Please provide a date for the Bill']
    },
    due_date:{
        type: Date,
        required:[true, 'Please provide a date for the Bill']
    },
    updated_at:{
        type: Date,
        default: Date.now
    },
    status:{
        type: String,
        required: [true, ' Please provide the status "Unpaid, Processing or Paid are valid"']
    },
    is_paid:{
        type: Boolean,
        default: false,
    },
    subtotal:{
        type: Number,
        required:[true, 'Insert a Valid number'],
    },
    total:{
        type: Number,
        required:[true, 'Insert a Valid number'],
    },
    bill_origin_id:{
        type: String,
        required:[true, 'Insert the identification for the bill, else will not be saved'],
    }



})
module.exports = Bill = mongoose.model('bill',BillSchema);