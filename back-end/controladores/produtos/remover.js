const db = require('../../db')
async function remover(req, res) {

    const produtos = db.collection('produtos').doc(req.params.id);
    const doc = await produtos.get();

    if (!doc.exists) {
        return res.status(404).json({ mensagem: "Produto não encontrado" })
    } else {
        await db.collection('produtos').doc(req.params.id).delete();
        return res.json({ mensagem: "Produto excluido com sucesso" })
    }




}

module.exports = remover