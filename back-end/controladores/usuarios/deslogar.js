const firebase = require('../../db')
function deslogar() {
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    });
}

module.exports = deslogar