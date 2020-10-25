const express=require('express');
const router=express.Router();
const UserController =require('../controller/UserController')
const personnelimage =require('../middleware/personnelimage');
const { user_role } = require('../models/relations');
router.post('/add',personnelimage,UserController.ajouter)
router.delete('/delete/:id',UserController.Delete)
router.get('/getallsociete',UserController.Getallsociete)
router.get('/getonebyid/:id',UserController.Getbyid)
router.put('/update/:id',UserController.Update)
router.put('/updateimage/:id',personnelimage,UserController.updateimage)
router.put('/changemotdpasse/:id',UserController.changemotdpasse)
router.post('/validate_captcha',UserController.validateCaptcha)
router.post('/login',UserController.auth)
router.get('/getallusers',UserController.getallusers)
module.exports =router