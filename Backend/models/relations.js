const { Sequelize } = require('sequelize');
const db =require('../DB/db')
const userModel=require('./user')

const banqueModel=require('./banque')
const comptemodel=require('./compte')
const historiqueEmbauchesmodel=require('./historiqueEmbauche')
const postemodel=require('./poste')
const rolemodel=require('./role')
const voituremodel=require('./voiture')

const User =userModel(db,Sequelize)
const Role=rolemodel(db,Sequelize)
const Banque =banqueModel(db,Sequelize)
const Compte =comptemodel(db,Sequelize)
const HistoriqueEmbauches=historiqueEmbauchesmodel(db,Sequelize)
const Poste=postemodel(db,Sequelize)
const Voiture = voituremodel(db,Sequelize)



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
//relation entre societe et voiture
User.hasMany(Voiture)
Voiture.belongsTo(User)
//relation entre User et role
User.belongsToMany(Role, {
    through: "user_role",
as: "roles",
foreignKey: "user_id"})
Role.belongsToMany(User,{
    through: "user_role",
as: "users",
foreignKey: "role_id"})


db.sync({force:false}).then(()=>{
    console.log('table created !!!!!!')
})
module.exports={
    User,
   Role,
    Poste,
    Banque,
    HistoriqueEmbauches,
    Compte,
    Voiture

}