const rota = require('./rotas');
const express = require('express');
const app = express();

app.use(express.json());
app.use(rota)


module.exports = app;