const { Voiture ,User } = require('../models/relations')
module.exports = {
    getallvoiture: async (req, res) => {
        try {
            const user = await User.findAll({where :{
                ID :req.params.id
            }})
            console.log(user[0])
            if(user[0].Function ==='Societe'){
                 const voiture = await Voiture.findAll({
                where: {
                    userID: user[0].ID
                }
                
            })
             if (voiture) {
                res.json({ voiture })
            }
            }else{
                const voiture = await Voiture.findAll({
                    where: {
                        userID: user[0].SocieteID
                    }})
                    if (voiture) {
                        res.json({ voiture })
                    }
            }
          
            
        } catch (error) {
            res.status(500).json({ error })
        }

    },
    ajoute: async (req, res) => {
        try {
            global.CopierCarteGrise
            global.CopierContrat
          const matriculevalidation =await Voiture.findAll({where :{
            Matricule:req.body.Matricule
          }})
       
          if(matriculevalidation.length !=0){
              return res.json({msg :"matricule deja utilise" ,ok :false})
          }
            const url = req.protocol + "://" + req.get("host");
            if (!req.files['CopierCarteGrise']) {

                this.CopierCarteGrise = null

            } else {

                this.CopierCarteGrise = url + "/images/" + req.files['CopierCarteGrise'][0].filename;

            }
            if (!req.files['CopierContrat']) {

                this.CopierContrat = null

            } else {

                this.CopierContrat = url + "/images/" + req.files['CopierContrat'][0].filename

            }
            const voiture = {
                Matricule: req.body.Matricule,
                Type: req.body.Type,
                DPMC: req.body.DPMC,
                Marque: req.body.Marque,
                Categorie: req.body.Categorie,
                Compteur: req.body.Compteur,
                Propritaire: req.body.Propritaire,
                CopierContrat: this.CopierContrat,
                CopierCarteGrise: this.CopierCarteGrise,
                userID :req.body.userID
            }
            const voitureres = await Voiture.create(voiture)
            if(voitureres){
                res.status(200).json({voiture :voitureres[0] ,msg:'ajoute avec success' ,ok:true})
            }

        } catch (error) {
            console.log(error)
            res.status(500).json({ error })
        }

    },
    getonevoiture:async(req,res)=>{
        try {
         const voiture =await   Voiture.findAll({where :{
                ID:req.params.id
            }})
            res.status(200).json({voiture:voiture[0]})
        } catch (error) {
            res.status(500).json({error})
        }
    }
}