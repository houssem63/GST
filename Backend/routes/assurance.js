const express=require('express');
const assuranceController = require('../controller/assuranceController');
const router=express.Router();
const AssuranceController =require('../controller/assuranceController')
const voitureimages =require('../middleware/voitureupload')

router.post('/add',voitureimages,AssuranceController.ajoute)
router.get('/getassranceofonevoiture/:id',AssuranceController.getassranceofonevoiture)
router.delete('/delete/:id',AssuranceController.delete)
module.exports=router