const { HistoriqueEmbauches } =require('../models/relations')
module.exports={
    ajouter: async(req,res)=>{
        const body=req.body
        console.log(body)
   const Embauches =await HistoriqueEmbauches.findAll({where :
           { PersonnelID:req.body.PersonnelID}
        })
        console.log(Embauches)
        if(Embauches.length != 0){
            if(Embauches[(Embauches.length)-1].DateSortie ===null){
return res.json({msg:'vous etes encore travaille'})
            }
        }
            
        
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
        console.log(req.params.id)
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
    },
    gethistoriquedeonepersonnel:(req,res)=>{
        HistoriqueEmbauches.findAll({
            where :{
                PersonnelID:req.params.id
            }
        }).then(responce=>{
            res.json({historique : responce})
        })
    }

}