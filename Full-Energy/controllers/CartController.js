const Cart = require('../models/Cart_model');
const Item = require('../models/Item_model');

module.exports.get_cart = async (req,res) => {
    const cartId = req.params.id;
    try{
        let cart = await Cart.find();
        if(cart ){
            res.send(cart);
        }
        else{
            res.send(null);
        }
    }
    catch(err){
        console.log(err);
        res.status(500).send("Something went wrong");
    }
}
module.exports.get_cart_items = async (req,res) => {
    const userId = req.params.id;
    try{
        let cart = await Cart.findOne({user_id:userId});
        if(cart && cart.items.length>0){
            res.send(cart);
        }
        else{
            res.send(null);
        }
    }
    catch(err){
        console.log(err);
        res.status(500).send("Something went wrong");
    }
}

module.exports.add_cart_item = async (req,res) => {
    const userId = req.params.id;
    const { productId, quantity } = req.body;

    try{
        let cart = await Cart.findOne({user_id:userId});
        let item = await Item.findOne({_id: productId});
        if(!item){
            res.status(404).send('Item not found!')
        }
        const sell_price = item.sell_price;
        const title = item.title;
        const item_id = item._id;
        const image_1 =item.image_1;
        const category_name = item.category_name;
        if(cart){
            // if cart exists for the user
            let itemIndex = cart.items.findIndex(p => p.item_id == productId);
            console.log(itemIndex);
            // Check if product exists or not
            if(itemIndex > -1)
            {
                let productItem = cart.items[itemIndex];
                productItem.quantity += quantity;
                cart.items[itemIndex] = productItem;
            }
            else {
                cart.items.push({ item_id,productId, title, quantity, sell_price ,image_1, category_name});
            }
            cart.subtotal += quantity*sell_price;
            cart = await cart.save();
            return res.status(201).send(cart);
        }
        else{
            // no cart exists, create one
            const newCart = await Cart.create({
                user_id:userId,
                items: [{item_id, productId, title, quantity, sell_price ,image_1, category_name}],
                subtotal: quantity*sell_price
            });
            return res.status(201).send(newCart);
        }       
    }
    catch (err) {
        console.log(err);
        res.status(500).send("Something went wrong");
    }
}
module.exports.update_cart_item = async (req, res) => {
    const userId = req.params.id;
    const { productId, qty } = req.body;
    try{
        let cart = await Cart.findOne({user_id:userId});
        let item = await Item.findOne({_id: productId});


        if(!item)
            return res.status(404).send('Item not found!'); // not returning will continue further execution of code.
        
        if(!cart)
          return res.status(400).send("Cart not found");
        else{

            const item_id = item._id;

            // if cart exists for the user
            let itemIndex = cart.items.findIndex(p => p.item_id == productId);

            // Check if product exists or not
            if(itemIndex == -1)
              return res.status(404).send('Item not found in cart!');
            else {
                let productItem = cart.items[itemIndex];
                productItem.quantity = qty;
                cart.items[itemIndex] = productItem;
            }
            cart.subtotal = cart.items.reduce((sum, item) => sum + item.sell_price * item.quantity,0);

          cart = await cart.save();
            return res.status(201).send(cart);
        }     
    }
    catch (err) {
        // just printing the error wont help us find where is the error. Add some understandable string to it.
        console.log("Error in update cart", err);
        res.status(500).send("Something went wrong");
    }
}

module.exports.delete_item = async (req,res) => {
    const userId = req.params.userId;
    const productId = req.params.itemId;
    try{
        let cart = await Cart.findOne({user_id:userId});
        let itemIndex = cart.items.findIndex(p => p._id == productId);
        if(itemIndex > -1)
        {
            let productItem = cart.items[itemIndex];
            cart.subtotal =cart.subtotal - productItem.quantity*productItem.sell_price;
            cart.items.splice(itemIndex,1);
        }
        cart = await cart.save();
        return res.status(200).send(cart);
    }
    catch (err) {
        console.log(err);
        res.status(500).send("Something went wrong");
    }
}