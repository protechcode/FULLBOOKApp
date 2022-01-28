const Review = require('../models/Review_model');
const User = require('../models/User_model');
const Item = require('../models/Item_model');

const config = require('config');
const stripe = require('stripe')(config.get('StripeAPIKey'));

module.exports.hello = (req,res) => {

    res.send("hello");
}

module.exports.get_reviews = async (req,res) =>
{
    const itemId = req.params.id;
    Review.find({item_id : itemId}).sort({date:-1}).then(reviews => res.json(reviews));
}


module.exports.get_review = async (req,res) =>
{   
    Review.findById({_id: req.params.id},req.body).then(function(review){
        Review.findOne({_id: req.params.id}).then(function(review){
            res.json(review);
        });
    });

}

///***********Should be just for logged in users */

module.exports.update_review = (req,res) => {
    Review.findByIdAndUpdate({_id: req.params.id},req.body).then(function(review){
        Review.findOne({_id: req.params.id}).then(function(review){
            res.json(review);
        });
    });
}
///***********Should be just for logged in users */
module.exports.post_review = (req,res) => {
    const newReview = new Review(req.body);
    newReview.save().then(review => res.json(review));
}

///***********Should be just for the user review or admin */
module.exports.delete_review = (req,res) => {
    Review.findByIdAndDelete({_id: req.params.id}).then(function(review){
        res.json({success: true});
    });
}