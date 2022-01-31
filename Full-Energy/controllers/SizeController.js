const Size = require('../models/Size_model');
const Item = require('../models/Item_model');



const config = require('config');


module.exports.hello = (req,res) => {

    res.send("hello");
}

module.exports.get_sizes = async (req,res) =>
{
    const itemId = req.params.id;
    Size.find({item_id : itemId}).sort({date:-1}).then(sizes => res.json(sizes));
}


module.exports.get_size = async (req,res) =>
{   
    Size.findById({_id: req.params.id},req.body).then(function(size){
        Size.findOne({_id: req.params.id}).then(function(size){
            res.json(size);
        });
    });

}

///***********For update the sizes */

module.exports.update_size = (req,res) => {
    Size.findByIdAndUpdate({_id: req.params.id},req.body).then(function(size){
        Size.findOne({_id: req.params.id}).then(function(size){
            res.json(size);
        });
    });
}
///***********For create new sizes*/
module.exports.post_size = (req,res) => {
    const newSize = new Size(req.body);
    newSize.save().then(size => res.json(size));
}

///***********For Delete a size */
module.exports.delete_size = (req,res) => {
    Size.findByIdAndDelete({_id: req.params.id}).then(function(size){
        res.json({success: true});
    });
}