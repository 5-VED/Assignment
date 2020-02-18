const express = require('express');
const path = require('path');
const rootDir=require('../util/path');
const router=express.Router();
const usernameRoutes=require('./username');


router.get('/users',(req,res,next)=>{
    //res.sendFile(path.join(rootDir ,'views', 'users.html'))

    const users=usernameRoutes.users;

    res.render('users',{
        title:'Users',
        users:users,
        hasUsers:users.length > 0
    });
});

module.exports=router;
