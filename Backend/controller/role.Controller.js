const{ Role }=require('../models/relations')
module.exports={
    ajoute :(req,res)=>{
        Role.create({Libelle :req.body.Libelle}).then(responce=>{
        res.json({msg:'role ajouter'})
        })
    }
}