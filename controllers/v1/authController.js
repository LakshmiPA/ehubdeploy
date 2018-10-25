'use strict';

const Models = require('../../models');
const config = require('./../../config/index');

function checkSignUpParams(req) {

    req.checkBody("email", "Email is required").notEmpty();
    req.checkBody("password","Password is required" ).notEmpty();
    req.checkBody("name","Name is required").notEmpty();
    req.checkBody("phone_number", "Phone number is required").notEmpty();

    return req.validationErrors();

}

module.exports.signup = async (req,res,next) =>{
    try{

        // const errors = checkSignUpParams(req);
        // if (errors) {
        //     return res.status(400).json({ error: true, message: errors });
        // }
        // var { name,email, password,phone_number } = req.body;
        var { name,department} = req.body;
        // name=_.trim(name);
        // email=_.trim(email);
        // password=_.trim(password);
        // phone_number=_.trim(phone_number);
        // Models.Users.findOrCreate({ where: { email: req.body.email }, defaults: { email, password: passwordHelper.generateHash(password) } }).spread((user, created) => {
        //     if (!created) {
        //         return res.status(400).json({ error: true, message: "User with this email already exist."});
        //     } else {
        //         return res.status(200).json({ error: false, message:"User has been created successfully.", data: userData });
        //     }
        // })
        var user = await  Models.users.create({
            name,
            department
        })
        if(!user){
            return res.status(400).json({ error: true, message: "Error in creating the user."});
        }else{
            return res.status(200).json({ error: false, message:"User has been created successfully.", data: userData });
        }
    }catch(e){
        next(e);
    }
}

module.exports.login = async (req,res,next) => {
    try{

        const { email, password } = req.body;
        var user = await  Models.users.find({
            where: { 
                email,
                password
            }
        })
        if(!user){
            return res.status(400).json({ error: true, message: "Invalid user." });
        }
        return res.status(200).json({ error: false, data: user });

    }catch(e){
        next(e);
    }
}






