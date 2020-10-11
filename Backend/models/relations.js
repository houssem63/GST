const { Sequelize } = require('sequelize');
const db =require('../DB/db')
const userModel=require('./user')

const banqueModel=require('./banque')
const comptemodel=require('./compte')
const historiqueEmbauchesmodel=require('./historiqueEmbauche')
const postemodel=require('./poste')
const User =userModel(db,Sequelize)

const Banque =banqueModel(db,Sequelize)
const Compte =comptemodel(db,Sequelize)
const HistoriqueEmbauches=historiqueEmbauchesmodel(db,Sequelize)
const Poste=postemodel(db,Sequelize)



//relation entre Societe et Compte
User.hasMany(Compte)
Compte.belongsTo(User)
//relation entre banque et compte
Banque.hasMany(Compte)
Compte.belongsTo(Banque)
//relation entre historiqueEmbauches et Personnel
User.hasMany(HistoriqueEmbauches)
HistoriqueEmbauches.belongsTo(User)
//relation entre historiqueEmbauches et Poste
Poste.hasMany(HistoriqueEmbauches)
HistoriqueEmbauches.belongsTo(Poste)
//relation entre societe et poste
User.hasMany(Poste)
Poste.belongsTo(User)
User.hasMany(HistoriqueEmbauches)
HistoriqueEmbauches.belongsTo(User)
db.sync({force:false}).then(()=>{
    console.log('table created !!!!!!')
})
module.exports={
    User,
   
    Poste,
    Banque,
    HistoriqueEmbauches,
    Compte

}