const { Sequelize } = require('sequelize');
const db =require('../DB/db')
const societeModel=require('./societe')
const clientModel=require('./client')
const personnelModel=require('./personnel')
const banqueModel=require('./banque')
const comptemodel=require('./compte')
const historiqueEmbauchesmodel=require('./historiqueEmbauche')
const postemodel=require('./poste')
const Societe =societeModel(db,Sequelize)
const Client = clientModel(db,Sequelize)
const Personnel =personnelModel(db,Sequelize)
const Banque =banqueModel(db,Sequelize)
const Compte =comptemodel(db,Sequelize)
const HistoriqueEmbauches=historiqueEmbauchesmodel(db,Sequelize)
const Poste=postemodel(db,Sequelize)
//relation entre Societe et Client
Societe.hasMany(Client)
Client.belongsTo(Societe)
//relation entre Compte et Client
Client.hasMany(Compte)
Compte.belongsTo(Client)
//relation entre Societe et personnel
Societe.hasMany(Personnel)
Personnel.belongsTo(Societe)
//relation entre Societe et Compte
Societe.hasMany(Compte)
Compte.belongsTo(Societe)
//relation entre banque et compte
Banque.hasMany(Compte)
Compte.belongsTo(Banque)
//relation entre historiqueEmbauches et Personnel
Personnel.hasMany(HistoriqueEmbauches)
HistoriqueEmbauches.belongsTo(Personnel)
//relation entre historiqueEmbauches et Poste
Poste.hasMany(HistoriqueEmbauches)
HistoriqueEmbauches.belongsTo(Poste)
//relation entre societe et poste
Societe.hasMany(Poste)
Poste.belongsTo(Societe)

db.sync({force:false}).then(()=>{
    console.log('table created !!!!!!')
})
module.exports={
    Societe,
    Client,
    Personnel,
    Poste,
    Banque,
    HistoriqueEmbauches,
    Compte

}