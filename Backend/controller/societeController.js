const { Societe } =require('../models/relations')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
module.exports={
    ajouter:async(req,res)=>{
        console.log(req.file)
     global.filename;
        const url = req.protocol + "://" + req.get("host");
   if(!req.file.filename){
       this.filename=null
   }else{
        this.filename=url + "/images/" + req.file.filename
   }
       global.societe ;
        const findsociete = await Societe.findAll({where:{login:req.body.login}})
        
        if(findsociete[0]){
          return  res.json({msg:'login deja utilise',ok:false})
        }
        const findsocieteEmail = await Societe.findAll({where:{Email:req.body.Email}})
        
        if(findsocieteEmail[0]){
          return  res.json({msg:'Email deja utilise',ok:false})
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
                   Sigle:this.filename,
                   MotDePasse:hash,
                   Status:req.body.Status,
                   DateExpiration:req.body.DateExpiration,
                   login:req.body.login,
           
                   }
            }
        
        Societe.create(this.societe).then((resq)=>{
            res.status(200).json({ok:true,msg:'inscriptionavec succes'})
        }).catch((err)=>{
            console.log(err)
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
        console.log(req.params.id)
        Societe.findAll({
            where :{
                ID:req.params.id
            }
        }).then((responce)=>{
            res.status(200).json({societe :responce[0].dataValues})
        }).catch((err)=>{
            res.status(500).json({err:'error server' + err})
        })
    },
    auth: async (req, res, next) => {
        
console.log(req.body)
        try {
           
            let fetchsociete;
            const societe = await  Societe.findAll({
                where :{
                    login:req.body.login
                },raw: true,
                nest: true})
            if (!societe[0] ) {
                return res.json({ msg: "login ou mot de passe incorrect" , ok : false});
            }
            fetchsociete = societe;

            const pass = await bcrypt.compare(req.body.MotDePasse, societe[0].MotDePasse)


            if (!pass) {
                return res.json({ msg: "login ou mot de passe incorrect" , ok : false })
            }
            const status= societe[0].Status
            console.log(status)
            if (status===0){
                return res.json({msg:"votre compte n'est pas activer",ok :false})
            }
            const token = jwt.sign({ email: fetchsociete[0].Email }, process.env.SECRET,
                { expiresIn: "5h" }
            );
            let societeId;
            societeId = { id: fetchsociete[0].ID }
let societeData=fetchsociete[0]
            res.status(200).json({ token: token, societeId:societeId,societeData:societeData ,expiresIn: "14400",ok:true,msg:'connecter avce succes' })
        }
        catch (err) {
            res.json({ err: "mot de passe ou email incorrect" +err , ok : false})
        };

    },

}