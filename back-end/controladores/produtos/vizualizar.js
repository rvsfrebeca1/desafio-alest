const firebase = require('../../db')
const db = firebase.firestore()
async function vizualizar(req, res) {
    const citiesRef = db.collection('produtos');
    const snapshot = await citiesRef.get();
    const produtos = []
    snapshot.forEach(doc => {
        produtos.push({ id: doc.id, produto: doc.data() })
    });

    return res.json(produtos)
}

module.exports = vizualizar