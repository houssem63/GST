const { Societe } =require('../models/relations')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
module.exports={
    ajouter:async(req,res)=>{
        global.societe ;
        const findsociete = await Societe.findAll({where:{login:req.body.login}})
        console.log(findsociete)
        if(findsociete[0]){
          return  res.json({messge:'login deja utilise'})
        }
    const hash=await bcrypt.hash(req.body.MotDePasse, 10)
    console.log(hash)
            if(hash){
                this.societe = {
                    Rs:req.body.Rs,
                   Adresse:req.body.Adresse,
                   Tel:req.body.Tel,
                   Fax:req.body.Fax,
                   Email:req.body.Email,
                   Site:req.body.Site,
                   Matfiscale:req.body.Matfiscale,
                   Sigle:req.body.Sigle,
                   MotDePasse:hash,
                   Status:req.body.Status,
                   DateExpiration:req.body.DateExpiration,
                   login:req.body.login,
           
                   }
            }
        
        Societe.create(this.societe).then((resq)=>{
            res.status(200).json({resq})
        }).catch((err)=>{
            console.log(err.messge)
            res.status(500).json({err:'error server' + err})
        })
    },
    Delete:(req,res)=>{
    
        Societe.destroy({
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
        Societe.update(body, {
            where: {
              ID: req.params.id
            }}).then((responce)=>{
                res.status(200).json({msg:'Societe edit avec succes'})
            }).catch((err)=>{
                res.status(500).json({err:'error server' + err})
            })
    },
    Getall:(req,res)=>{
        Societe.findAll().then((responce)=>{
            res.status(200).json({societe :responce})
        }).catch((err)=>{
            res.status(500).json({err:'error server' + err})
        })
    },
    Getbyid:(req,res)=>{
        Societe.findAll({
            where :{
                ID:req.params.id
            }
        }).then((responce)=>{
            res.status(200).json({societe :responce})
        }).catch((err)=>{
            res.status(500).json({err:'error server' + err})
        })
    },
    auth: async (req, res, next) => {
        

        try {
           
            let fetchsociete;
            const societe = await  Societe.findAll({
                where :{
                    login:req.body.login
                },raw: true,
                nest: true})
            if (!societe[0] ) {
                return res.json({ msg: "login incorrect" , ok : false});
            }
            fetchsociete = societe;

            const pass = await bcrypt.compare(req.body.MotDePasse, societe[0].MotDePasse)


            if (!pass) {
                return res.json({ msg: "mot de passe  incorrect" , ok : false })
            }
            const token = jwt.sign({ email: fetchsociete[0].Email }, process.env.SECRET,
                { expiresIn: "5h" }
            );
           /* let afficheuser;
            afficheuser = { _id: fetchcandiat._id, nom: fetchcandiat.nom, prenom: fetchcandiat.prenom, job: fetchcandiat.job }
*/
            res.status(200).json({ token: token, expiresIn: "14400",ok:true })
        }
        catch (err) {
            res.json({ err: "mot de passe ou email incorrect" +err , ok : false})
        };

    },

}