const firebase = require('../../db')


function logar(req, res) {
    const { email, senha } = req.body
    firebase.auth().signInWithEmailAndPassword(email, senha)
        .then((userCredential) => {

            const user = userCredential.user;
            return res.json({ uid: user.uid })
        })
        .catch((error) => {
            const errorMessage = error.message;
            return res.status(500).json({ error: { mensagem: errorMessage } })
        });
}

module.exports = logar