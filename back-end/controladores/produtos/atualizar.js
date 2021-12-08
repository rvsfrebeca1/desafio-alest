const db = require('../../db')
const yup = require('yup')
async function atualizar(req, res) {
    const schema = yup.object().shape({
        nome: yup.string(),
        descricao: yup.string(),
        valor: yup.number()
    })

    const dadosValidos = await schema.validate(req.body)


    const produtos = db.collection('produtos').doc(req.params.id);
    await produtos.update(dadosValidos);

    return res.json({ mensagem: "Produto atualizado com sucesso" })



}

module.exports = atualizar