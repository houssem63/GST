const { PrestataireAssurance  ,Assurance} =require('../models/relations')

module.exports={
    ajoute :async(req,res)=>{
        try{
            console.log(req.body)
          const body =req.body;
          const pre ={
              Libelle:req.body.Libelle,
              Adresse :req.body.Adresse,
              Site:req.body.Site,
              Tel:req.body.Tel
          }
          console.log(pre)
        const prestataire=await PrestataireAssurance.create(pre)    
        if(prestataire){
            res.status(200).json({prestataire})
        }  
        }
        
      catch (error) {
          console.log(error)
         res.status(500).json({error})
     }},
    getall:async(req,res)=>{
        try {
           const prestataire= await PrestataireAssurance.findAll();
           console.log(prestataire)
           if(prestataire.lenght !=0){
               res.status(200).json({prestataire})
           }
        } catch (error) {
            console.log(error)
            res.status(500).json({error})
        }
    },
    getone:async(req,res)=>{
        try {
       const prestataire=await     PrestataireAssurance.findAll({where:{
                ID:req.params.id
            }})
            if(prestataire.lenght !=0){
                res.status(200).json({prestataire:prestataire[0]})
            }
        } catch (error) {
            res.status(500).json({error})
        }
    },
    update:async(req,res)=>{
try {
    const prestataire =await PrestataireAssurance.update(req.body,{where:{
        ID:req.params.id
    }})
res.status(200).json({msg : 'prestatitre edit avec succes' ,ok:true})} 
catch (error) {
    res.status(500).json({error})
}
    },
    delete:async(req,res)=>{
        try {
            let assurance =[];
             assurance  =await Assurance.findAll({where:{
                prestataireassuranceID :req.params.id
            }}) 
            if(assurance[0] ===undefined){
                await PrestataireAssurance.destroy({where :{
                    ID :req.params.id
                }}) 
                res.status(200).json({ms:'suppremer avec success',ok :true})
            }else{
               
                res.json({msg :'cette prestataire deja utilise vous navez pas le supprimer' ,ok:false})

            }
           
        } catch (error) {
            res.status(500).json({error})

        }
    }
}