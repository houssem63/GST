const express=require('express');
const prestataireassuranceController = require('../controller/prestataireassuranceController');
const router=express.Router();
const PrestataireController =require('../controller/prestataireassuranceController')


router.post('/add',PrestataireController.ajoute)
router.get('/getall',PrestataireController.getall)
router.get('/getone/:id',prestataireassuranceController.getone)
router.put('/update/:id',PrestataireController.update)
router.delete('/delete/:id',prestataireassuranceController.delete)
module.exports =router