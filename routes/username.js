const express=require('express');
const path=require('path');
const rootDir=require('../util/path');
const users = [];

const router = express.Router();


router.get('/',(req,res,next)=>{
     //res.sendFile(path.join(rootDir,'views','username.html'));
     res.render('username',{
          title:'Add User'
     });
});

// router.post('/users',(req,res,next)=>{
//     res.sendFile(path.join(rootDir,"views","users.html"))
//  });

 router.post('/users',(req,res,next)=>{
      //console.log(req.body);
      //res.sendFile(path.join(rootDir,'views','users.html'));

      users.push({ name: req.body.username }); 
      res.redirect('/');
});

exports.routes = router;
exports.users = users;