const { Sequelize } = require('sequelize');
require('dotenv').config()
const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT
  });
  sequelize.authenticate().then(()=>{  console.log('Connecte avec succes.');})
  .catch(e=>{
   
    console.error('err connection:', error);   
  });
  
   
  
  module.exports = sequelize;