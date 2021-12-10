const express = require('express')
const rota = express()
const vizualizar = require('./controladores/produtos/vizualizar')
const adicionar = require('./controladores/produtos/adicionar')
const atualizar = require('./controladores/produtos/atualizar')
const remover = require('./controladores/produtos/remover')
const cadastrar = require('./controladores/usuarios/cadastro')
const logar = require('./controladores/usuarios/login')
const deslogar = require('./controladores/usuarios/deslogar')

//usuarios
rota.post('/usuario/cadastro', cadastrar)
rota.post('/usuario/login', logar)
rota.get('/usuario/deslogar', deslogar)

//produtos
rota.get('/produtos/vizualizar', vizualizar)
rota.post('/produtos/adicionar', adicionar)
rota.delete('/produtos/remover/:id', remover)
rota.put('/produtos/atualizar/:id', atualizar)

module.exports = rota