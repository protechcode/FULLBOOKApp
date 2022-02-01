const Cart = require('../models/Cart_model');
const Item = require('../models/Item_model');

module.exports.hello = (req,res) => {

    res.send("hello");
}

module.exports.get_cart_items = async (req, res) => {
    const userId = req.params.id;
    const {productId, quantity } = req.body;
    try{
        let cart = await Cart.find({user_id: userId});
        
        if (cart && cart,items.length>0){
            res.json({cart: cart});
        }
        else{
            res.send(null)
        }

    }
    catch(err) {
        console.log(err);
        res.status(500).send("Something went wrong");
    }
}

module.exports.add_cart_item = async (req, res) => {
    const userId = req.params.id;
    const {productId, quantity } = req.body;
    try{
        let cart = await Cart.find({user_id: userId});
        let item = await Item.find({_id: productId});
        if(!item){
            res.status(404).send('Error!: Item not found in registers');
        }
        const price = item.price;
        const name =item.title;
        if(cart){
            //If cart exists for user
            let itemIndex = cart.items.findIndex(prod => prod.productId == productId);
            
            //Check for existence of product
            if(itemIndex > -1){
                let productItem = cart.items[itemIndex];
                productItem.quantity += quantity;
                cart.items[itemIndex] = productItem;
            } else{
               cart.items.push({ productId, name, quantity, price});

            }
            cart.subtotal += quantity*price;
            cart =await cart.save();
            return res.status(201).send(cart);
        }else {
            //No cart exists || not found
            const newCart = Cart.create({
                userId,
                items: [{ productId, name, quantity, price }],
                subtotal: quantity*price
            });
            return res.status(201).send(newCart);
        }
    }catch(err){
        console.log(err);
        res.status(500).send("Something went wrong");
    }
}
module.exports.update_cart_item = async (req, res) => {
    const userId = req.params.id;
    const { productId, qty } = req.body;

    try{
        let cart = await Cart.find({ user_id: userId});
        let item = await Item.find({_id: productId});

        if(!item)
            return res.status(404).send('Item not found!'); // not returning will continue further execution of code.
        
        if(!cart)
          return res.status(400).send("Cart not found");
        else{
            // if cart exists for the user
            let itemIndex = cart.items.findIndex(p => p.productId == productId);

            // Check if product exists or not
            if(itemIndex == -1)
              return res.status(404).send('Item not found in cart!');
            else {
                let productItem = cart.items[itemIndex];
                productItem.quantity = qty;
                cart.items[itemIndex] = productItem;
            }
            cart.bill = cart.items.reduce((sum, item) => sum + item.price * item.quantity,0);
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
        let cart = await Cart.findOne({userId});
        let itemIndex = cart.items.findIndex(p => p.productId == productId);
        if(itemIndex > -1)
        {
            let productItem = cart.items[itemIndex];
            cart.bill -= productItem.quantity*productItem.price;
            cart.items.splice(itemIndex,1);
        }
        cart = await cart.save();
        return res.status(201).send(cart);
    }
    catch (err) {
        console.log(err);
        res.status(500).send("Something went wrong");
    }
}