const express=require('express');
const router=express.Router();
const AssuranceController =require('../controller/assuranceController')
const voitureimages =require('../middleware/voitureupload')

router.post('/add',voitureimages,AssuranceController.ajoute)
router.get('/getassranceofonevoiture/:id',AssuranceController.getassranceofonevoiture)
module.exports=router