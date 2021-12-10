require('dotenv').config()
const firebase = require('firebase');
const config = require('./config')

const db = firebase.initializeApp(config);


module.exports = db;



