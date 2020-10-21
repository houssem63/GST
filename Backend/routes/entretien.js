const express=require('express');
const router=express.Router();
const EntretienController =require('../controller/entretienController')
router.post('/add',EntretienController.ajouter)
router.delete('/delete/:id',EntretienController.Delete)
router.get('/getall',EntretienController.getall)
//router.get('/getonebyid/:id',EntretienController.Getonebyid)
router.put('/update/:id',EntretienController.Update)

module.exports =router