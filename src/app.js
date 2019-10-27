'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const db = require("./config/db")

const app = express();

//Conecta ao banco
mongoose.Promise = global.Promise;
mongoose.connect(db.mongoURI,
   {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
   }).then(() => {
      console.log("Conectado ao mongo!");
   }).catch((err) => {
      console.log("Erro ao se conectar: " + err);
   });

//Carrega os Models
const Product = require('./models/product');

//Carrega as Rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



app.use('/', indexRoute);
app.use('/products', productRoute);

module.exports = app;