const { User ,HistoriqueEmbauches} =require('../models/relations')

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
module.exports={
    ajouter:async(req,res)=>{
        console.log(req.body.Login)
     global.personnelimage;
     global.copierpermis;
//console.log(req.files['Image'][0])
//console.log(req.files['CopierPermis'][0])

       const url = req.protocol + "://" + req.get("host");
   if(!req.files['Image']){
       
       this.personnelimage="https://secure.gravatar.com/avatar/03723a218a9152e9bad38a84058e21d7?s=192&d=mm&r=g%202x"
       
   }else{
    
        this.personnelimage=url + "/images/" + req.files['Image'][0].filename;
        
   }
   if(!req.files['CopierPermis']){
       
       this.copierpermis=null
       
   }else{
    
        this.copierpermis=url + "/images/" + req.files['CopierPermis'][0].filename
        
   }

       global.user ;
        const finduser = await User.findAll({where:{Login:req.body.Login}})
        
        if(finduser[0]){
          return  res.json({msg:'login deja utilise',ok:false})
        }
        const findEmail = await User.findAll({where:{Email:req.body.Email}})
        
        if(findEmail[0]){
          return  res.json({msg:'Email deja utilise',ok:false})
        }
    const hash=await bcrypt.hash(req.body.MotDePasse, 10)
    console.log(hash)
            if(hash){
                this.user = {
                    Rs:req.body.Rs,
                   Adresse:req.body.Adresse,
                   Tel:req.body.Tel,
                   Fax:req.body.Fax,
                   Email:req.body.Email,
                   Site:req.body.Site,
                   Matfiscale:req.body.Matfiscale,
                   Image:this.personnelimage,
                   MotDePasse:hash,
                   Status:req.body.Status,
                   DateExpiration:req.body.DateExpiration,
                   Login:req.body.Login,
                   Cin:req.body.Cin,
                   Nom:req.body.Nom,
                Prenom:req.body.Prenom,
                DateDeNaissance:req.body.DateDeNaissance,  
                NumCNSS:req.body.NumCNSS,
                SituationFamilialle:req.body.SituationFamilialle,
                
                CopierPermis:this.copierpermis, 
                Rs:req.body.Rs,
                 NomPC:req.body.NomPC,
                PrenomPC:req.body.PrenomPC,
                TelPersonnelContact:req.body.TelPersonnelContact,
                FaxPersonnelContact:req.body.FaxPersonnelContact,
                AdresseEmailPersonnel:req.body.AdresseEmailPersonnel,
                MatFiscal:req.body.MatFiscal,
                Regfiscale:req.body.Regfiscale,
                Function:req.body.Function,
                SocieteID:req.body.SocieteID,
           
             
        } ,   console.log(this.user)
            }
        
        User.create(this.user).then((resq)=>{
            res.status(200).json({ok:true,msg:'inscriptionavec succes'})
        }).catch((err)=>{
            console.log(err)
            res.status(500).json({err:'error server' + err})
        })
    },
    Delete:async(req,res)=>{
    
 try{
 const responce=    await   User.destroy({
            where: {
              ID: req.params.id
            }
          })
         
              console.log('id '+req.params.id)
             await HistoriqueEmbauches.destroy({where:{
                PersonnelID :req.params.id
             }}) 
          
             
 }    catch(e){
     console.log(e)
 }
            
         
    },
    Update:(req,res)=>{
        const body =req.body
        console.log(body)
        console.log(req.body)
  
       User.update(body, {
            where: {
              ID: req.params.id
            }}).then((responce)=>{
                res.status(200).json({msg:'Societe edit avec succes'})
            }).catch((err)=>{
                res.status(500).json({err:'error server' + err})
            })
    },
    Getallsociete:(req,res)=>{
        User.findAll({
            where:{
                function:'Societe'
            }
        }).then((responce)=>{
            res.status(200).json({societe :responce})
        }).catch((err)=>{
            res.status(500).json({err:'error server' + err})
        })
    },
    Getbyid:(req,res)=>{
        console.log(req.params.id)
        User.findAll({
            where :{
                ID:req.params.id
            }
        }).then((responce)=>{
            res.status(200).json({user :responce[0].dataValues})
        }).catch((err)=>{
            res.status(500).json({err:'error server' + err})
        })
    },
 
    auth: async (req, res, next) => {
        try {
           
             global.fetchuser;
            const user = await  User.findAll({
                where :{
                    Login:req.body.Login
                },raw: true,
                nest: true})
                

            if (!user[0] ) {
                return res.json({ msg: "login ou mot de passe incorrect" , ok : false});
            }
            this.fetchuser = user;
            
            const pass = await bcrypt.compare(req.body.MotDePasse, user[0].MotDePasse)

            if (!pass) {
                return res.json({ msg: "login ou mot de passe incorrect" , ok : false })
            }
           global.status;
      
   if(this.fetchuser[0].Function ==='Societe'){
                this.status = await User.findAll({ where :{
                ID: Number(this.fetchuser[0].ID    ) 
                }})
               
                console.log(this.status[0]  )

            }else{
                this.status = await User.findAll({  where :{
                    ID :this.fetchuser[0].SocieteID
                }})
              
                console.log(this.status)
            }
              console.log(this.status[0])
            
            if (this.status[0].Status===false){
                return res.json({msg:"votre compte n'est pas activer",ok :false})
            }else{
                const token = jwt.sign({ email: this.fetchuser[0].Email }, process.env.SECRET,
                    { expiresIn: "5h" }
                );
                let userId;
                userId = { id: this.fetchuser[0].ID }
    let userData=this.fetchuser[0]
                res.status(200).json({ token: token, userId:userId,userData:userData ,expiresIn: "14400",ok:true,msg:'connecter avce succes' })
            }
        
        }
        catch (err) {
            res.json({ err: "mot de passe ou email incorrect" +err , ok : false})
        };

    },
    updateimage :(req,res)=>{
        console.log(req.files['Image'])
        const url = req.protocol + "://" + req.get("host");
        const image =url + "/images/" + req.files['Image'][0].filename;
        const bady ={Image :image}
        User.update(bady, {
            where: {
              ID: req.params.id
            }}).then((responce)=>{
                console.log(responce)
                res.status(200).json({imagepath :image, msg:'Societe edit avec succes'})
            }).catch((err)=>{
                res.status(500).json({err:'error server' + err})
            })
    },
    changemotdpasse:async (req,res)=>{
        console.log(req.body)
    const user= await   User.findAll({where :{
            ID :req.params.id
        }})
console.log(user[0])
      const test=await  bcrypt.compare(req.body.actuelMotDePasse, user[0].MotDePasse)
      console.log(test)
      if(!test){
          return res.json({msg:'mot de passe actual incorrect',ok:false})
      }
    const hach =await  bcrypt.hash(req.body.nouvelleMotDePasse, 10)

    User.update({MotDePasse:hach}, {
        where: {
          ID: req.params.id
        }}).then((responce)=>{
            res.json({msg:'mot de passe changer',ok :true})
        })
    }
}