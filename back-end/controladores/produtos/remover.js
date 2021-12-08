const db = require('../../db')
async function remover(req, res) {
    await db.collection('produtos').doc(req.params.id).delete();

    return res.json({ mensagem: "Produto excluido com sucesso" })


}

module.exports = remover