const{ Role }=require('../models/relations')
module.exports={
    ajouter:(req,res)=>{
        const body=req.body
        console.log(body)
        Role.create(body).then((resq)=>{
            console.log(resq)
            res.status(200).json({role:resq})
        }).catch((err)=>{
            console.log(err)
            res.status(500).json({err:'error server' + err.message})
        })
    },
    Delete:(req,res)=>{
    
        Role.destroy({
            where: {
              ID: req.params.id
            }
          }).then((responce)=>{
              res.status(200).json({msg:'role suprimer avec succes'})
          }).catch((err)=>{
              res.status(500).json({err:'error server' + err})
          })
    },
    Update:(req,res)=>{
        const body =req.body
        Role.update(body, {
            where: {
              ID: req.params.id
            }}).then((responce)=>{
                res.status(200).json({msg:'role edit avec succes'})
            }).catch((err)=>{
                console.log(err)
                res.status(500).json({err:'error server' + err})
            })
    },
    Getall:(req,res)=>{
        Role.findAll({}).then((responce)=>{
            res.status(200).json({role :responce})
        }).catch((err)=>{
            res.status(500).json({err:'error server' + err})
        })
    },
    Getonebyid:(req,res)=>{
        Role.findAll({
            where :{
                ID:req.params.id
            }
        }).then((responce)=>{
            res.status(200).json({role :responce})
        }).catch((err)=>{
            res.status(500).json({err:'error server' + err})
        })
    }
}