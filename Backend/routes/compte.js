const express=require('express');
const router=express.Router();
const CompteController =require('../controller/compteController')
router.post('/add',CompteController.ajouter)
router.delete('/delete/:id',CompteController.Delete)
router.get('/getall/:id',CompteController.Getall)
router.get('/getonebyid/:id',CompteController.Getonebyid)
router.put('/update/:id',CompteController.Update)

module.exports =router