const Category = require('../models/Category_model');

module.exports.hello = (req,res) => {

    res.send("This route must be protected, it's for managing categories");
}

module.exports.get_categories = (req,res) => {
    Category.find().sort({created_date:-1}).then(categories => res.json(categories));
}

module.exports.post_category = (req,res) => {
    const newCategory = new Category(req.body);
    newCategory.save().then(caregory => res.json(caregory));
}

module.exports.update_category =  (req,res) => {
   Category.findByIdAndUpdate({_id: req.params.id},req.body).then(function(category){
        Category.findOne({_id: req.params.id}).then(function(category){
            res.json(category);
        });
    });
}

module.exports.delete_category =  (req,res) => {
    Category.findByIdAndDelete({_id: req.params.id}).then(function(category){
        res.json({success: true});
    });
}
