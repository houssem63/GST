const express=require('express');
const router=express.Router();
const Entretien_vehiculeController =require('../controller/entretien_vehiculeController')
router.post('/add',Entretien_vehiculeController.ajouter)
router.delete('/delete/:id',Entretien_vehiculeController.Delete)
router.get('/getall/:id',Entretien_vehiculeController.getall)
router.get('/getone/:id',Entretien_vehiculeController.getone)
router.put('/update/:id',Entretien_vehiculeController.Update)

module.exports =router