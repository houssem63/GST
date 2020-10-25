const entretienvehicule = require('../models/entretienvehicule')
const { Entretienvehicule ,Entretien ,Voiture} = require('../models/relations')

module.exports ={
    getall:async(req,res)=>{
try {
    const entretienvoiture =await Entretienvehicule.findAll({where :{
        voitureID :req.params.id
    },include:[Entretien]})
    if(entretienvoiture){
        res.status(200).json({entretienvoiture :entretienvoiture})
    }
} catch (error) {
    console.log(error)
    res.status(500).json({error})
}
    },
    ajouter:async  (req,res)=>{
        console.log(typeof req.body.entretienID)
      try {
            console.log(req.body)
           const entretien_vehicule ={
            DateOperation: req.body.DateOperation,
            PieceRechange: req.body.PieceRechange,
            MontantPieceRechange: req.body.MontantPieceRechange,
            MainOEuvre: req.body.MainOEuvre,
            AgentEntretien: req.body.AgentEntretien,
            KilomettrageArret: req.body.KilomettrageArret,
            KilomettrageLimite: req.body.KilomettrageLimite,
            DateProchainEntretien: req.body.DateProchainEntretien,
            Remarques: req.body.Remarques,
            voitureID: req.body.voitureID,
            entretienID: req.body.entretienID,
            userID:req.body.userID,
           }
      const entretien =await Entretienvehicule.create(entretien_vehicule
       
        )
 

        const entr = await Entretienvehicule.findAll({where:{
            ID :entretien.ID
        },include :[Entretien]})

res.status(200).json({entretienvoiture:entr[0]})
           
       } catch (error) {
           console.log(error)
           res.status(500).json(error)
       }
            
          
           
            

            
          //  

           // if(entretienvoiture){
           //     res.status(200).json({entretienvoiture :entretienvoiture})
           // }
     

        
    },
    Delete :async(req,res)=>{
        try {
          await  Entretienvehicule.destroy({where:{
            ID:req.params.id
        }})   
        res.status(200).json({msg:'supprimer avce success'})
        } catch (error) {
            res.status(500).json({error})

        }
     
    },
    Update:async(req,res)=>{
        try {
          await  Entretienvehicule.update(req.body,{where:{
            ID:req.params.id
        }})   
        res.status(200).json({msg:'edit avce success'})
        } catch (error) {
            console.log(error)
            res.status(500).json({error})

        }},
        getone :async(req,res)=>{
            try {
                const entretienvehicule =await Entretienvehicule.findOne({where:{ID:req.params.id},include:[Entretien]})
               console.log(entretienvehicule)
                res.status(200).json({entretienvoiture:entretienvehicule})
            } catch (error) {
                res.status(500).json({error})
    
            }
        }
}