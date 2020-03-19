const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const authenticate  = require('../../middleware/authenticate');

const User = require('../../models/user');
const UserAddress = require('../../models/userAddress');


router.post('/signup', (req, res, next) => {

    const { name, email, password } = req.body;

  // Simple validation
  if (!name || !email || !password) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }

  try {

    const user = User.findOne({email});

        if(user == true){
            return res.status(500).json({
                message: 'Email Already Exists'
            })
        }

        const salt = bcrypt.genSalt(10);
        if(!salt){
            return res.status(500).json({
            error: 'Something went wrong in salt'
        });
        }

        const hash = bcrypt.hash(password, salt);
        if(!hash){
            return res.status(500).json({
            error: 'Something went wrong in hash'
        });
        }
                    const newUser = new User({
                        name,
                        email,
                        password: hash,
                    });

                    const savedUser = newUser.save()
                    .then(doc => {
                        res.status(201).json({
                            message: 'Account Created Successfully'
                        });
                    })
                    if(!savedUser){
                        return res.status(500).json({
                        error: 'Something went wrong in hash'
                    });
                    }

                    const token = jwt.sign({ id: savedUser._id }, 'mysecretkey', {
                        expiresIn: 3600
                      });

                     res.status(200).json({
                         message:{
                        token,
                        user: {
                          id: savedUser.id,
                          name: savedUser.name,
                          email: savedUser.email
                        }
                    }
                      });  

} catch (e) {
    res.status(400).json({ error: e.message });
  }


});


router.post('/login', (req, res, next) => {

    const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }

  try {

    const user = User.findOne({email});
    if(user != true){
            return res.status(500).json({
                message: 'Email Does not Already Exists'
            })
        }

        const isMatch = bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(500).json({
                message: 'Invalid Password'
            })
        }
        
        const token = jwt.sign({ id: user._id }, 'mysecretkey', { expiresIn: 3600 });
        if(!token){
            return res.status(500).json({
                message: 'Couldnt Sign Token'
            })
        }

        res.status(200).json({
            token,
            user: {
              id: user._id,
              name: user.name,
              email: user.email
            }
          });

} catch (e) {
    res.status(400).json({ msg: e.message });
  }


});

router.post('/new-address', authenticate, (req, res, next) => {

    UserAddress.findOne({"user": req.body.userId})
    .exec()
    .then(user => {

        if(user){

            UserAddress.findOneAndUpdate({"user": req.body.userId}, {
                $push: {
                    "address": req.body.address
                }
            }, {
                new: true
            })
            .then(doc => {
                res.status(201).json({
                    message: doc
                });
            });

        }else{

            const userAddress = new UserAddress({
                _id: new mongoose.Types.ObjectId(),
                user: req.body.userId,
                address: req.body.address
            });

            userAddress.save()
            .then(doc => {
                res.status(201).json({
                    message: doc
                });
            })
            .catch(error => {
                res.status(500).json({
                    error: error
                });
            })

        }

    });

});

router.get('/get-addresses/:userId', authenticate, (req, res, next) => {

    UserAddress.findOne({"user": req.params.userId})
    .select('_id user address')
    .exec()
    .then(user => {
        res.status(200).json({
            message: user
        })
    })
    .catch(error => {
        res.status(500).json({
            error: error
        })
    })

});

module.exports = router;