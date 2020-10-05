const { Sequelize } = require('sequelize');
const db =require('../DB/db')
const societeModel=require('../models/societe')
const Societe =societeModel(db,Sequelize)
db.sync({force:false}).then(()=>{
    console.log('table created !!!!!!')
})
module.exports={
    Societe
}