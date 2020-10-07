const express = require('express');
var logger = require('morgan');
const path = require('path');
require('dotenv').config()
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 5000;
const app = express();
require('./DB/db')
const Societe = require('./routes/societe');
const Personnel = require('./routes/personel');

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", " Origin , X-Requested-With, Content-Type, Accept , Authorization");
    res.setHeader("Access-Control-Allow-Methods", " POST, GET , DELETE ,PUT, OPTIONS");
    next();
  });
  app.use(logger('dev'));
  app.use(express());
  app.use(express.json());
  app.use("/images", express.static(path.join("images")))
  app.use(express.urlencoded({ extended: false }));
  app.use('/api/societe', Societe);
  app.use('/api/personnel', Personnel);

  const server = app.listen(PORT, (req, res, next) => { console.log(`Server started on port ${PORT}`) })
  app.get('/', (req, res) => {
    res.send(`Server started on port ${PORT}`);
  });
module.exports = server