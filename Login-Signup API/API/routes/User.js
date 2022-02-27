require('dotenv').config();
const express = require('express');
const route = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../model/UserSchema');
const Auth = require('../middleware/Authorization');
const mongoose = require('mongoose');
var token;

//User Profile API
route.get('/Profile', auth, (req, res, next) => {
    const verify = jwt.verify(token, process.env.ACCESS_TOKEN);
    res.status(200).json({
        message: "Hello, " + verify.Name,
        userInfo: verify
        
    })
    
})

//Sign Up API
route.post('/Register', (req, res, next) => {
    //Converting Password into hash for encryption
    bcrypt.hash(req.body.Password, 10, (error, hash) => {
        if (error) {
            res.status(500).json({
                err: error
            })
        }
        else {
            const user = new User({
                _id: new mongoose.Types.ObjectId,
                Name: req.body.Name,
                Email: req.body.Email,
                Password: hash,
                Phone: req.body.Phone,
                ERP: req.body.ERP,
                Program: req.body.Program,
                Institute: req.body.Institute
            })

            user.save()
                .then(result => {
                    res.status(200).json({
                        Successful: "New User's Data entered",
                        newUser: result
                    })
                })
                .catch(error => {
                    res.status(500).json({
                        err: error
                    })
                })
        }
    })



})

//Login API
route.post('/login', (req, res, next) => {
    User.find({ Email: req.body.Email })
        .then(user => {
            if (user.length < 1) {
                return res.status(400).json({
                    InvalidCredentials: "User not found!"
                })
            }
            bcrypt.compare(req.body.Password, user[0].Password, (error, result) => {
                if (!result) {
                    return res.status(400).json({
                        InvalidCredentials: "Invalid Password!"
                    })
                }
                if (result) {
                    token = jwt.sign({
                        Email: user[0].Email,
                        Name: user[0].Name,
                        ERP: user[0].ERP,
                        Institute: user[0].Institute,

                    },
                        process.env.ACCESS_TOKEN

                    );
                    res.status(200).json({
                        Successful: "User is Logged In!",
                        Email: user[0].Email,
                        Name: user[0].Name,
                        ERP: user[0].ERP,
                        Institute: user[0].Institute,
                        Token: token

                    })

                }

            })

        }
        )
})

//Logout API
route.post('/Logout', (req,res)=> {
    if(token == undefined){
        res.status(200).json({
            error: "No User is Logged in currently!"
        })
    }
    else{
        const verify = jwt.verify(token, process.env.ACCESS_TOKEN);
        token = undefined;
        
        res.status(200).json({
            Message: "Good Bye, " + verify.Name + " we hope to see you soon.",
            Logout: "User Logged out!"
        })
    }
    
})

//Authorization function
function auth(req, res, next){
    if(token != undefined){
        jwt.verify(token , process.env.ACCESS_TOKEN,(err,verified) => {
            if(err){
                return res.status(404).json({
                    error: "Token not verified"
                })
            }
            req.Email = verified;
            next();
        })
    }
    else{
        return res.status(404).json({
            error: "Need to login first"
        })
    }
}


module.exports = route;

