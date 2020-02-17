const express=require('express');
const path=require('path');
const rootDir=require('../util/path');
const names = [];

const router = express.Router();


router.get('/',(req,res,next)=>{
     //res.sendFile(path.join(rootDir,'views','username.html'));
     res.render('users',{
          Pagetitle : title,
          path:'/',
          Username:names,
          hasNames : Username > 0
     });
});

// router.post('/users',(req,res,next)=>{
//     res.sendFile(path.join(rootDir,"views","users.html"))
//  });

 router.post('/users',(req,res,next)=>{
     
     //res.redirect('/');     
});

module.exports = router;