const express=require('express');
const router=express.Router();
const PersonnelController =require('../controller/personnelController')
router.post('/add',PersonnelController.ajouter)
router.delete('/delete/:id',PersonnelController.Delete)
router.get('/getall',PersonnelController.Getall)
router.get('/getonebyid/:id',PersonnelController.Getonebyid)
router.put('/update/:id',PersonnelController.Update)

module.exports =router