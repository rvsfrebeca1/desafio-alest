const { initializeApp } = require('firebase-admin/app');
const { getFirestore } = require('firebase/firestore/lite');
require('dotenv').config()
const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID
};
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)





async function ler() {
    try {
        const dado = collection('produtos').get()
        console.log(dado)
    } catch (error) {
        console.log(error.message)
    }

}


ler()


module.exports = db;