const express=require('express');
const router=express.Router();
const SocieteController =require('../controller/societeController')
const image_upload =require('../middleware/image_upload')
router.post('/add',image_upload,SocieteController.ajouter)
router.delete('/delete/:id',SocieteController.Delete)
router.get('/getallsociete',SocieteController.Getall)
router.get('/getonebyid/:id',SocieteController.Getbyid)
router.put('/update/:id',SocieteController.Update)
router.post('/login',SocieteController.auth)
module.exports =router