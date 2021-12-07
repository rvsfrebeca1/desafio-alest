const express = require('express')
const rota = express()

//usuarios
rota.post('/usuario/cadastro')
rota.post('/usuario/login')

//produtos
rota.get('/produtos/vizualizar')
rota.post('/produtos/adicionar')
rota.delete('/usuario/remover')
rota.put('/produtos/atualizar')

module.exports = rota