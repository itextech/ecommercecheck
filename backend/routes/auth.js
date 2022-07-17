const express = require("express");
const router=express.Router();

const {signup,signin,signout,requireSignin}=require('../controller/auth');
const {userSignupvalidators}=require("../validators")
router.post('/signup',userSignupvalidators,signup);
router.post('/signin',signin);
router.get('/signout',signout);


module.exports=router;