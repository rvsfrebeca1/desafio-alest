require('dotenv').config()
var admin = require("firebase-admin");

var serviceAccount = require("./database-desafio-alest-firebase-adminsdk-xzwsl-a2566cd62f.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore()
module.exports = db