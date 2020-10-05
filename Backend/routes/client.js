const express=require('express');
const router=express.Router();
const ClientController =require('../controller/clientController')
router.post('/add',ClientController.ajouter)
router.delete('/delete/:id',ClientController.Delete)
router.get('/getall',ClientController.Getall)
router.get('/getonebyid/:id',ClientController.Getonebyid)
router.put('/update/:id',ClientController.Update)

module.exports =router