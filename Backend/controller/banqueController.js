const { Banque } =require('../models/relations')
const rp = require('request-promise');
const cheerio=require('cheerio')
const url = 'https://en.wikipedia.org/wiki/List_of_banks_in_Tunisia';
module.exports={
    ajouter: async(req,res)=>{

        arr = [];
        const result = await rp(url)
        
        const $ = cheerio.load(result);
         $("ol >li").each(async(index, element) => {
          
           console.log($(element).text())

           arr.push($(element).text())
        /*   console.log(arr)
          arr.forEach(element => {
            console.log(element)
            const banque ={
                libelle :element
            }
            Banque.create(banque).then(res=>{

            })
           });*/
           
           
         });
         arr.forEach(element => {
            console.log(element)
            const banque ={
                libelle :element
            }
            Banque.create(banque).then(res=>{

            })
        })
        
       
      /*  const body=req.body
        console.log(body)
        Banque.create(body).then((resq)=>{
            console.log(resq)
            res.status(200).json({resq})
        }).catch((err)=>{
            console.log(err)
            res.status(500).json({err:'error server' + err.message})
        })*/

    },
    Delete:(req,res)=>{
    
        Banque.destroy({
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
        Banque.update(body, {
            where: {
              ID: req.params.id
            }}).then((responce)=>{
                res.status(200).json({msg:'Societe edit avec succes'})
            }).catch((err)=>{
                res.status(500).json({err:'error server' + err})
            })
    },
    Getall:(req,res)=>{
        Banque.findAll().then((responce)=>{
            res.status(200).json({banque :responce})
        }).catch((err)=>{
            res.status(500).json({err:'error server' + err})
        })
    },
    Getonebyid:(req,res)=>{
        Banque.findAll({
            where :{
                ID:req.params.id
            }
        }).then((responce)=>{
            res.status(200).json({societe :responce})
        }).catch((err)=>{
            res.status(500).json({err:'error server' + err})
        })
    }

}