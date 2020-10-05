const express=require('express');
const router=express.Router();
const SocieteController =require('../controller/societeController')
router.post('/add',SocieteController.ajouter)
router.delete('/delete/:id',SocieteController.Delete)
router.get('/getallsociete',SocieteController.Getall)
router.get('/getonebyid/:id',SocieteController.Getbyid)
router.put('/update/:id',SocieteController.Update)
router.post('/signin',SocieteController.auth)
module.exports =router