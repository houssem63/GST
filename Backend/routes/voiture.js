const express=require('express');
const router=express.Router();
const voitureController =require('../controller/voitureController')
const voitureimages =require('../middleware/voitureupload')
router.get('/getallvoitureofonesociete/:id',voitureController.getallvoiture)
router.post('/add',voitureimages,voitureController.ajoute)
router.get('/getonevoiture/:id',voitureController.getonevoiture)
module.exports =router