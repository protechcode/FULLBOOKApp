const Bill = require('../models/Bills_model');

module.exports.hello = (req,res) => {

    res.send("hello, this route is to save fiscal record for the aquisition products, from providers");
}
module.exports.get_bills = async (req,res) =>
{
    
    Bill.find().sort({date:-1}).then(bills => res.json(bills));
}
module.exports.post_bill = (req,res) => {
    const newBill = new Bill(req.body);
    newBill.save().then(bill => res.json(bill));
}

module.exports.update_bill =  (req,res) => {
    Bill.findByIdAndUpdate({_id: req.params.id},req.body).then(function(bill){
        Bill.findOne({_id: req.params.id}).then(function(bill){
            res.json(bill);
        });
    });
}

module.exports.delete_bill = async (req,res) => {
    Bill.findByIdAndDelete({_id: req.params.id}).then(function(bill){
        res.json({success: true});
    });
}