const { Sequelize } = require('sequelize');
const db =require('../DB/db')
const userModel=require('./user')

const banqueModel=require('./banque')
const comptemodel=require('./compte')
const historiqueEmbauchesmodel=require('./historiqueEmbauche')
const postemodel=require('./poste')
const rolemodel=require('./role')
const voituremodel=require('./voiture')
const assurancemodel =require('./assurance')
const prestataireassrancemodel=require('./prestataireassurance')
const entretienmodel =require('./entretien')
const entretienvehiculemodel =require('./entretienvehicule')
const User =userModel(db,Sequelize)
const Role=rolemodel(db,Sequelize)
const Banque =banqueModel(db,Sequelize)
const Compte =comptemodel(db,Sequelize)
const HistoriqueEmbauches=historiqueEmbauchesmodel(db,Sequelize)
const Poste=postemodel(db,Sequelize)
const Voiture = voituremodel(db,Sequelize)
const Assurance = assurancemodel(db,Sequelize)
const PrestataireAssurance = prestataireassrancemodel(db,Sequelize)
const Entretien=entretienmodel(db,Sequelize)
const Entretienvehicule=entretienvehiculemodel(db,Sequelize)
const user_role =db.define('user_role', {})


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
//relation entre assurance et voiture
Voiture.hasMany(Assurance)
Assurance.belongsTo(Voiture)
//relation entre assurance et voiture
User.hasMany(Assurance)
Assurance.belongsTo(User)
//relation entre assurance et prestatire_assurance
PrestataireAssurance.hasMany(Assurance)
Assurance.belongsTo(PrestataireAssurance)
//relation entre User et role
User.belongsToMany(Role, {
    through: "user_role",
as: "roles",
foreignKey: "user_id"})
Role.belongsToMany(User,{
    through: "user_role",
as: "users",
foreignKey: "role_id"})
//relation entre vehicule et entretien
Voiture.belongsToMany(Entretien, {
    through: "entretien_vehicule",
as: "roles",
foreignKey: "voiture_id"})
Entretien.belongsToMany(Voiture,{
    through: "entretien_vehicule",
as: "users",
foreignKey: "entretien_id"})
//relation entre user et entretien
User.hasMany(Entretienvehicule)
Entretienvehicule.belongsTo(User)
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
    Voiture,
    Assurance,
    user_role,
    PrestataireAssurance,
    Entretien,
    Entretienvehicule

}