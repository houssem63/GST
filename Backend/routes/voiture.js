const express=require('express');
const router=express.Router();
const voitureController =require('../controller/voitureController')
const voitureimages =require('../middleware/voitureupload')
router.get('/getallvoitureofonesociete/:id',voitureController.getallvoiture)
router.post('/add',voitureimages,voitureController.ajoute)
router.get('/getonevoiture/:id',voitureController.getonevoiture)
router.get('/marque',voitureController.addmarque)
router.get('/getallmarque',voitureController.getallmarque)
router.put('/update/:id',voitureimages,voitureController.update)
router.delete('/delete/:id',voitureController.delete)
module.exports =router