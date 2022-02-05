const Provider = require('../models/Provider_model');

///////////////Admin////////////////////////////////
module.exports.get_providers = (req,res) => {
    Provider.find().sort({date:-1}).then(providers => res.json(providers));
}

module.exports.get_provider = (req,res) => {
    Provider.findById({_id: req.params.id},req.body).then(function(provider){
        Provider.findOne({_id: req.params.id}).then(function(provider){
            res.json(provider);
        });
    });
}

module.exports.post_provider = (req,res) => {
    const newProvider = new Provider(req.body);
    newProvider.save().then(provider => res.json(provider));
}

module.exports.update_provider = (req,res) => {
    Provider.findByIdAndUpdate({_id: req.params.id},req.body).then(function(provider){
        Provider.findOne({_id: req.params.id}).then(function(provider){
            res.json(provider);
        });
    });
}

module.exports.delete_provider = (req,res) => {
    Provider.findByIdAndDelete({_id: req.params.id}).then(function(provider){
        Provider.json({success: true});
    });
}
/*
module.exports.delete_users = (req,res) => {
    User.findByIdAndDelete({_id: req.params.id}).then(function(user){
        res.json({success: true});
    });
}*/