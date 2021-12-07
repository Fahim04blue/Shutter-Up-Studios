const admin = require('firebase-admin');

const serviceAccount = require('./shutter-up-studio-serviceAccount.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;
