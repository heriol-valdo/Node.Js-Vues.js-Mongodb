const dbconnect = require('mongoose');

dbconnect.connect('mongodb://localhost/AdminUser', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = dbconnect.connection;

db.on('error', console.error.bind(console, 'Erreur de connexion à la base de données :'));
db.once('open', () => {
  console.log('Connecté à la base de données MongoDB.');
});

module.exports = dbconnect;
