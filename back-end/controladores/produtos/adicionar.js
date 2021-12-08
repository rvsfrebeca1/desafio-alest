const yup = require('yup')
const db = require('../../db')
async function adicionar(req, res) {
    let id = (Math.random() * 10).toFixed(2)

    const schema = yup.object().shape({
        nome: yup.string().required(),
        valor: yup.number().required(),
        descricao: yup.string().required()
    })

    const dadosValidos = await schema.validate(req.body)
    await db.collection('produtos').doc(`${id}`).set(dadosValidos);
    return res.json({ mensagem: "Produto criado com sucesso" })

}

module.exports = adicionar