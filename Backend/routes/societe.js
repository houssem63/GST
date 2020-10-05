const express=require('express');
const router=express.Router();
const SocieteController =require('../controller/societeController')
router.post('/add',SocieteController.ajouter)
module.exports =router