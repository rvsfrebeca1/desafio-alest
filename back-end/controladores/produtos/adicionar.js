const yup = require('yup')
const db = require('../../db')
async function adicionar(req, res) {
    let id = (Math.random() * 10).toFixed(2)

    const { nome, valor } = req.body

    if (!valor) {
        return res.status(400).json({ mensagem: "O campo valor é obrigatório" })
    }
    if (!nome) {
        return res.status(400).json({ mensagem: "o campo nome é obrigatorio" })
    }
    if (typeof Number(valor) !== 'number') {
        return res.status(400).json({ mensagem: "o campo valor precisa ser um número" })
    }

    await db.collection('produtos').doc(`${id}`).set(req.body);
    return res.json({ mensagem: "Produto criado com sucesso" })

}

module.exports = adicionar