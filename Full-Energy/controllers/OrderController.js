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
    Order.find().then(orders => res.json({orders: orders}));

    /* const userId = req.params.id;
    Order.find({userId : userId}).sort({date:-1}).then(orders => res.json(orders)); */
}
module.exports.create_order = async (req, res) =>{
    const userId = req.body.user_id;
    const cartId = req.body.cart_id;
    const cartInfo = await Cart.find({_id : cartId}).then(cart => cart[0]).catch(e=>console.log(e))
    const items = cartInfo.items;
    const total = cartInfo.subtotal;
    const card = req.body.card_type
    const paymentMethod = req.body.payment_method;

    const order = new Order({
        user_id: userId,
        items: items,
        payment_method: paymentMethod,
        card_type: card,
        total: total,

    })
    order.save()
    const cartUpdated = await Cart.findByIdAndUpdate({_id: cartId},{purchased: true}).then(cartUpdated=>cartUpdated).catch(e=>console.log(e))
    return res.status(201).json({
        message: order._id +" New Order Created, the payment will be processed, and an email from your bank will confirm the purchase",
        order: order,
        purchased: cartUpdated.purchased
    })

 
}