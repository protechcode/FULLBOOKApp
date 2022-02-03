const Item = require('../models/Item_model');

module.exports.get_items = (req,res) => {
    Item.find().sort({created_date:-1}).then(items => res.json({length: items.length, items: items}));
}

module.exports.get_item = (req,res) => {
    Item.findById({_id: req.params.id},req.body).then(function(item){
        Item.findOne({_id: req.params.id}).then(function(item){
            res.json({item: item});
        });
    });
}
module.exports.get_category = (req,res) => {
    Item.find({category_id: req.params.category})
    .sort({created_date:-1}).then(items => 
    res.json({length: items.length, items_by_category: items}));
}

module.exports.post_item = (req,res) => {
    const newItem = new Item(req.body);
    newItem.save().then(item => res.json(item));
}

module.exports.update_item = (req,res) => {
    Item.findByIdAndUpdate({_id: req.params.id},req.body).then(function(item){
        Item.findOne({_id: req.params.id}).then(function(item){
            res.json(item);
        });
    });
}

module.exports.delete_item = (req,res) => {
    Item.findByIdAndDelete({_id: req.params.id}).then(function(item){
        res.json({success: true});
    });
}