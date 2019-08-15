const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./routes');

//Iniciando app
const server = express();
server.use(cors());
server.use(express.json())

//Iniciando DB
mongoose.connect('mongodb://localhost:27017/nodeapi', {useNewUrlParser: true, useFindAndModify: false});

server.use(routes);

server.listen(3333);