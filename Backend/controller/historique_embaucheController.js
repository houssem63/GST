const { HistoriqueEmbauches } =require('../models/relations')
module.exports={
    ajouter:(req,res)=>{
        const body=req.body
        console.log(body)
        HistoriqueEmbauches.create(body).then((resq)=>{
            console.log(resq)
            res.status(200).json({resq})
        }).catch((err)=>{
            console.log(err)
            res.status(500).json({err:'error server' + err.message})
        })
    },
    Delete:(req,res)=>{
    
        HistoriqueEmbauches.destroy({
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
        HistoriqueEmbauches.update(body, {
            where: {
              ID: req.params.id
            }}).then((responce)=>{
                res.status(200).json({msg:'Societe edit avec succes'})
            }).catch((err)=>{
                res.status(500).json({err:'error server' + err})
            })
    },
    Getall:(req,res)=>{
        HistoriqueEmbauches.findAll({
            where :{
                societeID:req.params.id
            }
        }).then((responce)=>{
            res.status(200).json({HistoriqueEmbauches :responce})
        }).catch((err)=>{
            res.status(500).json({err:'error server' + err})
        })
    },
    Getonebyid:(req,res)=>{
        HistoriqueEmbauches.findAll({
            where :{
                ID:req.params.id
            }
        }).then((responce)=>{
            res.status(200).json({Historique :responce[0]})
        }).catch((err)=>{
            res.status(500).json({err:'error server' + err})
        })
    }

}