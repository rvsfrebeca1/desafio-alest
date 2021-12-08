const db = require('../../db')
const yup = require('yup')
async function atualizar(req, res) {
    const schema = yup.object().shape({
        nome: yup.string(),
        descricao: yup.string(),
        valor: yup.number()
    })

    const dadosValidos = await schema.validate(req.body)



    try {
        const produtos = db.collection('produtos').doc(req.params.id);
        await produtos.update(dadosValidos);
        return res.json({ mensagem: "Produto atualizado com sucesso" })
    } catch (error) {
        return res.status(404).json({ mensagem: "Produto não encontrado" })
    }




}

module.exports = atualizar