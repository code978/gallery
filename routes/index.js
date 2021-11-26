const express = require('express');
const router = express.Router();
const UserSchmea = require('../Model/Schema')

router.get('/',async(req,res)=>{
    const user = await UserSchmea.find();
    res.send(user);
})

router.post('/res',async(req,res)=>{
    let user = new UserSchmea(req.body);
    await user.save();
    res.send(user);
})

module.exports = router;