const { Compte ,Banque } =require('../models/relations')
module.exports={
    ajouter:async (req,res)=>{
        try{const body=req.body
        console.log(body)
const compte = await   Compte.create(body)
console.log(compte.ID)
const compteres = await Compte.findAll({where :{
    ID :compte.ID
},include :[Banque]})
if(compteres){
    res.json({ compte:compteres[0]})
}        }catch(e){
            console.log(e)
        }
        
    
           
       
    },
    Delete:(req,res)=>{
    
        Compte.destroy({
            where: {
              ID: req.params.id
            }
          }).then((responce)=>{
              res.status(200).json({msg:'Societe suprimer avec succes'})
          }).catch((err)=>{
              res.status(500).json({err:'error server' + err})
          })
    },
    Update:(req,res)=>{
        const body =req.body
        Compte.update(body, {
            where: {
              ID: req.params.id
            }}).then((responce)=>{
                res.status(200).json({msg:'Societe edit avec succes'})
            }).catch((err)=>{
                res.status(500).json({err:'error server' + err})
            })
    },
    Getall:(req,res)=>{
        Compte.findAll({where:{
            userID :req.params.id
        } ,include :[Banque]}).then((responce)=>{
            console.log(responce[0])
            res.status(200).json({compte :responce})
        }).catch((err)=>{
            res.status(500).json({err:'error server' + err})
        })
    },
    Getonebyid:(req,res)=>{
        Compte.findAll({
            where :{
                ID:req.params.id,
               
            }
        }).then((responce)=>{
            console.log(responce)
            res.status(200).json({societe :responce})
        }).catch((err)=>{
            res.status(500).json({err:'error server' + err})
        })
    }

}