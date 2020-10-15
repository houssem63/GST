const { Compte } =require('../models/relations')
module.exports={
    ajouter:(req,res)=>{
        const body=req.body
        console.log(body)
        Compte.create(body).then((resq)=>{
            console.log(resq)
            res.status(200).json({compte:resq})
        }).catch((err)=>{
            console.log(err)
            res.status(500).json({err:'error server' + err.message})
        })
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
        }}).then((responce)=>{
            res.status(200).json({compte :responce})
        }).catch((err)=>{
            res.status(500).json({err:'error server' + err})
        })
    },
    Getonebyid:(req,res)=>{
        Compte.findAll({
            where :{
                ID:req.params.id
            }
        }).then((responce)=>{
            res.status(200).json({societe :responce})
        }).catch((err)=>{
            res.status(500).json({err:'error server' + err})
        })
    }

}