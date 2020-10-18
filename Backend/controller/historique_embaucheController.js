const { HistoriqueEmbauches ,Poste} =require('../models/relations')
module.exports={
    ajouter: async(req,res)=>{
        try{
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
                
            
        const newembauche =  await  HistoriqueEmbauches.create(body)
        const embaucheres =await HistoriqueEmbauches.findAll({
            where:{ID :newembauche.ID},include : [Poste]
        })
        res.json({ historique:embaucheres[0]})
    }catch(e){
            res.json({err :e})
        }
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
    Update:async(req,res)=>{
        try{
            const body =req.body

     await       HistoriqueEmbauches.update(body, {
                where: {
                  ID: req.params.id
                }})
                const historiqueupdate = await HistoriqueEmbauches.findAll({where:{
                    ID :req.params.id
                },include :[Poste]})
                if(historiqueupdate){
     res.json({historique:historiqueupdate[0]})               
                }


        }catch(e){
            console.log(e)
            res.json({err:e})
        }
        
    },
    Getall:(req,res)=>{
        console.log(req.params.id)
        HistoriqueEmbauches.findAll({
            where :{
                societeID:req.params.id
            },include:[Poste]
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
            },include:[Poste]
        }).then(responce=>{
            responce.forEach(h => {
                console.log(responce.length)
                console.log(h.DateSortie)
            });
            res.json({historique : responce})
        })
    }

}