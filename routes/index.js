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

router.put('/res/:id',async(req,res)=>{
    const {id} = req.params;
    const user =  UserSchmea.findbyId(id);
    console.log(user)
})

router.delete('/res/:id',async(req,res)=>{
    res.send(`deleted : ${id}`);
})

module.exports = router;