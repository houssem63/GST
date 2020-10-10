const { Personnel } =require('../models/relations')
module.exports={
    ajouter:async(req,res)=>{
        const body=req.body
        console.log(req.body)
        const url = req.protocol + "://" + req.get("host");
        global.filename;

        if(!req.file){
            this.filename=null
        }else{
             this.filename=url + "/images/" + req.file.filename
        }
        global.personnel ;
        const cin = await Personnel.findAll({where:{Cin:req.body.Cin}})
        
        if(cin[0]){
          return  res.json({msg:'Cin deja utilise',ok:false})
        }
        const Email = await Personnel.findAll({where:{Email:req.body.Email}})
        
        if(Email[0]){
          return  res.json({msg:'Email deja utilise',ok:false})
        }
        this.personnel = {
            Cin:req.body.Cin,
           Nom:req.body.Nom,
           Prenom:req.body.Prenom,
           Date_de_naissance:req.body.Date_de_naissance, 
           Adresse:req.body.Adresse,
           Tel:req.body.Tel,
          
           Fax:req.body.Fax,
           Email:req.body.Email,
           NumCNSS:req.body.NumCNSS,
           CopierPermis:this.filename,
           SituationFamilialle:req.body.SituationFamilialle,
           societeID:req.body.societeID
   
           }
       Personnel.create(this.personnel).then((resq)=>{
            console.log(resq)
            res.status(200).json({resq,msg:'ajoute avec succes' ,ok :true})
        }).catch((err)=>{
            console.log(err)
            res.status(500).json({err:'error server' + err.message})
        })
    },
    Delete:(req,res)=>{
    
        Personnel.destroy({
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
        console.log(req.body)
        const url = req.protocol + "://" + req.get("host");
        global.filename;

        if(!req.file){
            this.filename=null
        }else{
             this.filename=url + "/images/" + req.file.filename
        }
        this.personnel = {
            Cin:req.body.Cin,
           Nom:req.body.Nom,
           Prenom:req.body.Prenom,
           Date_de_naissance:req.body.Date_de_naissance, 
           Adresse:req.body.Adresse,
           Tel:req.body.Tel,
          
           Fax:req.body.Fax,
           Email:req.body.Email,
           NumCNSS:req.body.NumCNSS,
           CopierPermis:this.filename,
           SituationFamilialle:req.body.SituationFamilialle,
           societeID:req.body.societeID
   
           }
        Personnel.update(this.personnel, {
            where: {
              ID: req.params.id
            }}).then((responce)=>{
                console.log(responce)
                res.status(200).json({msg:'Personnel edit avec succes',personnel:this.personnel})
            }).catch((err)=>{
                res.status(500).json({err:'error server' + err})
            })
    },
    Getall:(req,res)=>{
        Personnel.findAll({
            where :{
                societeID:req.params.id
            }
        }).then((responce)=>{
            res.status(200).json({personnel :responce})
        }).catch((err)=>{
            res.status(500).json({err:'error server' + err})
        })
    },
    Getonebyid:(req,res)=>{
        console.log(req.params.id)
        Personnel.findAll({
            where :{
                ID:req.params.id
            }
        }).then((responce)=>{
            res.status(200).json({personnel :responce[0]})
        }).catch((err)=>{
            res.status(500).json({err:'error server' + err})
        })
    }

}