const express = require('express')
const rota = express()
const vizualizar = require('./controladores/produtos/vizualizar')
const adicionar = require('./controladores/produtos/adicionar')

//usuarios
rota.post('/usuario/cadastro')
rota.post('/usuario/login')

//produtos
rota.get('/produtos/vizualizar', vizualizar)
rota.post('/produtos/adicionar', adicionar)
rota.delete('/usuario/remover')
rota.put('/produtos/atualizar')

module.exports = rota