const express = require('express');
const path = require('path');
const rootDir=require('../util/path');
const router=express.Router();
const usernameRoutes=require('./username');
const userController=require('../controllers/users');


router.get('/users',userController.username);

module.exports=router;
