const firebase = require('../../db')


function cadastrar(req, res) {
    const { email, senha } = req.body

    firebase.auth().createUserWithEmailAndPassword(email, senha)
        .then((userCredential) => {
            const user = userCredential.user;
            return res.json({ uid: user.uid })
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            return res.status(500).json({ error: { mensagem: errorMessage } })
        });
}

module.exports = cadastrar

