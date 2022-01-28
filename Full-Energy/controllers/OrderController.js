const Order = require('../models/Order_model');
const Cart = require('../models/Cart_model');
const User = require('../models/User_model');
const config = require('config');
const stripe = require('stripe')(config.get('StripeAPIKey'));

module.exports.hello = (req,res) => {

    res.send("hello");
}
module.exports.get_orders = async (req,res) =>
{
    const userId = requ.params.id;
    Order.find({userId : userId}).sort({date:-1}).then(orders => res.json(orders));
}
module.exports.checkout = async (req,res) =>{
    try{
        const userId = req.params.id;
        const {source} = req.body;
        let cart = await Cart.find({user_id: userId});
        let user = await User.find({_id: userId});
        const email = user.email;
    if(cart){
        const charge = await stripe.charges.create({
            amount: cart.subtotal,
            currency: 'eur',
            source:source,
            receipt_email: email
        })
        if(!charge) throw Error('Payment Declined!');
        if(charge){
            const order = await Order.create({
                userId,
                items: cart.items,
                total: cart.subtotal //+ x/100 x= Number for percentage, tax, etc its commented jus to try later
            });
            const data = await Cart.findByIdAndDelete({_id:cart.id});
            return res.status(201).send(order);
        }

    } else{
        res.status(500).send("You dont have items in your cart");
    }   
}catch(error){
        console.log(error);
        res.status(500).send("Something went wrong in Payment, Check Everyting, and the error")
    }
}