const express=require('express');
const path=require('path');
const rootDir=require('../util/path');
const names = [];

const router = express.Router();

router.get('/',(req,res,next)=>{
     //res.sendFile(path.join(rootDir,'views','username.html'));
     res.render('users',{
          title:'Users', 
          path: '/users',
           });
});

// router.post('/users',(req,res,next)=>{
//     res.sendFile(path.join(rootDir,"views","users.html"))
//  });

 router.post('/users',(req,res,next)=>{
     //res.sendFile(path.join(rootDir,"views","users.html"));
     names.push({name:req.body.name});
     res.redirect('/');     
});
module.exports=names;
module.exports = router;