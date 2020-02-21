const express=require('express');
const path=require('path');
const rootDir=require('../util/path');
const userController=require('../controllers/users');


const router = express.Router();


router.get('/',userController.getUserName);

// router.post('/users',(req,res,next)=>{
//     res.sendFile(path.join(rootDir,"views","users.html"))
//  });

 router.post('/users',userController.postUserName);

module.exports= router;
//exports.users = users;