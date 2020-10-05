const express=require('express');
const router=express.Router();
const BanqueController =require('../controller/banqueController')
router.post('/add',BanqueController.ajouter)
router.delete('/delete/:id',BanqueController.Delete)
router.get('/getall',BanqueController.Getall)
router.get('/getonebyid/:id',BanqueController.Getonebyid)
router.put('/update/:id',BanqueController.Update)

module.exports =router