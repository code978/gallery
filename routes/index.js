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
    // res.send(user);
    console.log(req.body)
})

router.put('/res/:id',async(req,res)=>{
    const {id} = req.params;
    const user =  await UserSchmea.findByIdAndUpdate(id,req.body);
    res.send(user);
})

router.delete('/res/:id',async(req,res)=>{
    res.send(`deleted : ${id}`);
})

module.exports = router;