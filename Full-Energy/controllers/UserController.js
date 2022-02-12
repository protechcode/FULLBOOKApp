const User = require('../models/User_model');


////////////////Admin//////////////////////////////////////
module.exports.get_users = (req,res) => {
    User.find().sort({date:-1}).then(users => res.json(users));
}

module.exports.get_user = (req,res) => {
    User.findById({_id: req.params.id},req.body).then(function(user){
        User.findOne({_id: req.params.id}).then(function(user){
            res.json(user);
        });
    });
}

module.exports.post_user = (req,res) => 
{   
    const { password } = req.body.password;
    const { name } = req.body.name;
    const { email } = req.body.email;
    const body = req.body



    if(!password){
        res.status(400).json({msg: 'Please enter a password'});
    }

    User.findOne({email})
    .then(user => {
        if(user) return res.status(400).json({msg: 'User already exists'});
        const newUser = new User({ name ,email, password });

        // Create salt and hash
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, (err, hash) => {
                if(err) throw err;
                newUser.password = hash;
                newUser.save()
                    .then(user => {
                        jwt.sign(
                            { id: user._id },
                            config.get('jwtsecret'),
                            { expiresIn: 3600 },
                            (err, token) => {
                                if(err) throw err;
                                res.json({
                                    token,
                                    user: {
                                        id: user._id,
                                        name: user.name,
                                        email: user.email
                                    }
                                });
                            }
                        )
                    });
            })
        })

       
    })
    /* const newUser = new User(req.body);
    newUser.save().then(user => res.json(user)); */
}

module.exports.update_user = (req,res) => {
    User.findByIdAndUpdate({_id: req.params.id},req.body).then(function(user){
        User.findOne({_id: req.params.id}).then(function(user){
            res.json(user);
        });
    });
}

module.exports.delete_user = (req,res) => {
    User.findByIdAndDelete({_id: req.params.id}).then(function(user){
        res.json({success: true});
    });
}
/*
module.exports.delete_users = (req,res) => {
    User.findByIdAndDelete({_id: req.params.id}).then(function(user){
        res.json({success: true});
    });
}*/