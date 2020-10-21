const { Assurance ,PrestataireAssurance }=require('../models/relations')
module.exports ={
    ajoute:async(req, res)=>{
        try {
                        global.CopierAssurance
                        
                        const url = req.protocol + "://" + req.get("host");
                        if (!req.files['CopierAssurance']) {
            
                            this.CopierAssurance = null
            
                        } else {
            
                            this.CopierAssurance = url + "/images/" + req.files['CopierAssurance'][0].filename;
            
                        }
                        const assurancereq = {
                            prestataireassuranceID: req.body.prestataireassuranceID,
                            DateOperation: req.body.DateOperation,
                            DateDebutValidite: req.body.DateDebutValidite,
                            DateFinValidite: req.body.DateFinValidite,
                            Montant: req.body.Montant,
                            voitureID: req.body.voitureID,

                            CopierAssurance: this.CopierAssurance,
                            userID :req.body.userID
                        }
            const assurance =await Assurance.create(assurancereq)
            console.log(assurance.ID)
            const assuranceresponce =await Assurance.findAll({where:{
                ID:assurance.ID
            },include :[PrestataireAssurance]})
            res.status(200).json({assurance:assuranceresponce[0] ,ok:true})
        } catch (error) {
            console.log(error)
            res.status(500).json({error})

        }
    },
    getassranceofonevoiture:async(req,res)=>{
        try {
            const assurances= await Assurance.findAll({where:{
                voitureID:req.params.id
            },include:[PrestataireAssurance]})
          
                res.status(200).json({assurance:assurances})
            
        } catch (error) {
            console.log(error)
            res.status(500).json({error})
        }
    },
    delete:async(req,res)=>{
        try {
          await  Assurance.destroy({where:{ID:req.params.id}})
          res.status(200).json({msg:'supprimer avec successe',ok:true})
        } catch (error) {
            res.status(500).json({error})

        }
    }
}