const express = require('express');
const Router = express.Router();
const UserSchmea = require('../Model/Schema')

Router.post('/',async(req,res)=>{
    let user = new UserSchmea(req.body);
    await user.save();
    res.send(user);
})

module.exports = Router;