const express=require('express');
const router=express.Router();
const RoleController =require('../controller/roleController')
router.post('/add',RoleController.ajouter)
router.delete('/delete/:id',RoleController.Delete)
router.get('/getall',RoleController.Getall)
router.get('/getonebyid/:id',RoleController.Getonebyid)
router.put('/update/:id',RoleController.Update)

module.exports =router