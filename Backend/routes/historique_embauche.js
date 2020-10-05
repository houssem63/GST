const express=require('express');
const router=express.Router();
const Historique_embaucheController =require('../controller/historique_embaucheController')
router.post('/add',Historique_embaucheController.ajouter)
router.delete('/delete/:id',Historique_embaucheController.Delete)
router.get('/getall',Historique_embaucheController.Getall)
router.get('/getonebyid/:id',Historique_embaucheController.Getonebyid)
router.put('/update/:id',Historique_embaucheController.Update)

module.exports =router