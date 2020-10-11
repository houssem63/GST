const express=require('express');
const router=express.Router();
const UserController =require('../controller/UserController')
const personnelimage =require('../middleware/personnelimage')
const copierpermis =require('../middleware/copierpermis')
router.post('/add',personnelimage,UserController.ajouter)
router.delete('/delete/:id',UserController.Delete)
router.get('/getallsociete',UserController.Getallsociete)
router.get('/getonebyid/:id',UserController.Getbyid)
router.put('/update/:id',UserController.Update)
router.post('/login',UserController.auth)
module.exports =router