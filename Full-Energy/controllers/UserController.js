const User = require('../models/User_model');
const bcrypt = require('bcrypt')


////////////////Admin//////////////////////////////////////
module.exports.get_users = (req, res) => {
    User.find().sort({ date: -1 }).then(users => res.json(users));
}

module.exports.get_user = (req, res) => {
    User.findById({ _id: req.params.id }, req.body).then(function (user) {
        User.findOne({ _id: req.params.id }).then(function (user) {
            res.json(user);
        });
    });
}

module.exports.post_user = async (req, res) => {
    console.log(req.body)

    const name = req.body.name;
    const surname = req.body.surname;
    const email = req.body.email;
    const password = req.body.password;
    const phone = req.body.phone;
    const address_1 = req.body.address_1;
    const address_2 = req.body.address_2;
    const is_admin = req.body.is_admin;
    const image_url = req.body.image_url;
    await User.findOne({ email: email })
        .then(user => {
            if (user) return res.status(400).json({ msg: 'User already exists' });
            if (password) {
                const saltRounds = 10;
                bcrypt.genSalt(saltRounds, (err, salt) => {
                    if (err) throw err;
                    bcrypt.hash(password, salt, (err, hash) => {
                        if (err) {
                            throw err;
                        }
                        const newUser = new User ({
                            name: name,
                            surname: surname,
                            email: email,
                            password: hash,
                            phone: phone,
                            address_1: address_1,
                            address_2: address_2,
                            is_admin: is_admin,
                            image_url: image_url
                        })
                       
                        newUser.save().then(user => {
                            res.json({
                                message: "User created succesfully",
                                user: {
                                    id: user._id,
                                    name: user.name,
                                    email: user.email,
                                    phone: user.phone,
                                    address_1: user.address_1,
                                    address_2: user.address_2,
                                    is_admin: user.is_admin,
                                    image_url: user.image_url,
                                }

                            })

                        })

                    })




                })
            }
         
        })
    }

module.exports.update_user = (req, res) => {
                User.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function (user) {
                    User.findOne({ _id: req.params.id }).then(function (user) {
                        res.json(user);
                    });
                });
            }

module.exports.delete_user = (req, res) => {
                User.findByIdAndDelete({ _id: req.params.id }).then(function (user) {
                    res.json({ success: true });
                });
            }
/*
module.exports.delete_users = (req,res) => {
    User.findByIdAndDelete({_id: req.params.id}).then(function(user){
        res.json({success: true});
    });
}*/