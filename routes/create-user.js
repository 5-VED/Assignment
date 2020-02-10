const express = require('express');
const path = require('path');

const router=express.Router();

router.post('/create-user',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
 });


 module.exports = router;