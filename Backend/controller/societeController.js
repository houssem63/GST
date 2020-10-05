const { Societe } =require('../models')
module.exports={
    ajouter:(req,res)=>{
        const body=req.body
        console.log(body)
        Societe.create({ title: "Jane"}).then((resq)=>{
            console.log(resq)
        })
    }
}