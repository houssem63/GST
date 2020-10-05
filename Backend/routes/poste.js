const express=require('express');
const router=express.Router();
const PosteController =require('../controller/posteController')
router.post('/add',PosteController.ajouter)
router.delete('/delete/:id',PosteController.Delete)
router.get('/getall',PosteController.Getall)
router.get('/getonebyid/:id',PosteController.Getonebyid)
router.put('/update/:id',PosteController.Update)

module.exports =router