const express = require('express')
const rota = express()
const vizualizar = require('./controladores/produtos/vizualizar')
const adicionar = require('./controladores/produtos/adicionar')
const atualizar = require('./controladores/produtos/atualizar')

//usuarios
rota.post('/usuario/cadastro')
rota.post('/usuario/login')

//produtos
rota.get('/produtos/vizualizar', vizualizar)
rota.post('/produtos/adicionar', adicionar)
rota.delete('/produtos/remover/:id')
rota.put('/produtos/atualizar/:id', atualizar)

module.exports = rota