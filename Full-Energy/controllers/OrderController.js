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
module.exports.get_order = async (req,res) =>
{
    Order.find({user_id: req.params.id}).then(order => res.json({order: order}));

    /* const userId = req.params.id;
    Order.find({userId : userId}).sort({date:-1}).then(orders => res.json(orders)); */
}
module.exports.create_order = async (req, res) =>{
    const userId = req.body.user_id;
    const userAddr1 = req.body.address_1;
    const userAddr2 = req.body.address_2;
    const userPhone = req.body.phone;
    const cartId = req.body.cart_id;
    const cartInfo = await Cart.find({_id : cartId}).then(cart => cart[0]).catch(e=>console.log(e))
    const items = cartInfo.items;
    const total = cartInfo.subtotal;
    const card = req.body.card_type
    const paymentMethod = req.body.payment_method;
    if(!userAddr2){
        const userUpdate = await User.findByIdAndUpdate({_id: userId},{phone: userPhone, address_1: userAddr1})
    } else if(userAddr2 !== null && userAddr2 !== ""){
        const userUpdate = await User.findByIdAndUpdate({_id: userId},{phone: userPhone, address_1: userAddr1, address_2:userAddr2})
   
    }else{
        res.status(404).json({message:"Must provide a valid address for the product to be sent"})
    }
    const confirmationOfUserUpdate= await User.findById({_id:userId});
    const order = new Order({
        user_id: userId,
        items: items,
        payment_method: paymentMethod,
        card_type: card,
        total: total,

    })
    order.save()
    const cartdelete = await Cart.findByIdAndDelete({_id: cartId}).catch(e=>console.log(e))
    return res.status(201).json({
        message: order._id +"The payment will be processed, and an email from your bank will confirm the purchase",
        order: order,
       
        user: confirmationOfUserUpdate
    })

 
}