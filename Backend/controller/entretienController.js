const { Entretien } = require('../models/relations')

module.exports ={
    getall:async(req,res)=>{
try {
    const entretien =await Entretien.findAll({})
    console.log(entretien)

    if(entretien){
        res.status(200).json({entretien :entretien})
    }
} catch (error) {
    console.log(error)
    res.status(500).json({error})
}
    },
    ajouter:async(req,res)=>{
        try {
            const entretien =await Entretien.create(req.body)

            if(entretien){
                res.status(200).json({entretien :entretien})
            }
        } catch (error) {
            res.status(500).json({error})

        }
    },
    Delete :async(req,res)=>{
        try {
          await  Entretien.destroy({where:{
            ID:req.params.id
        }})   
        res.status(200).json({msg:'supprimer avce success'})
        } catch (error) {
            res.status(500).json({error})

        }
     
    },
    Update:async(req,res)=>{
        try {
          await  Entretien.update(req.body,{where:{
            ID:req.params.id
        }})   
        res.status(200).json({msg:'edit avce success'})
        } catch (error) {
            console.log(error)
            res.status(500).json({error})

        }}
}