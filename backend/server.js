// server.js (Backend)
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { authentificationUser } = require('./FunctionUser/authentificationUser'); 
const { contactAdmin } = require('./FunctionUser/contactAdmin');// Importez la fonction d'authentification
const { registerUser } = require('./FunctionUser/registerUser'); // Importez la fonction de création d'utilisateur
const dbconnect = require('./DatabaseConnect/Dbconnect'); // Importez le fichier de connexion à MongoDB

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Route d'authentification
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  const result = await authentificationUser(email, password);
  return res.json(result);
});

// Route de contact
app.post('/api/contact', async (req, res) => {
  const {nom, email, message } = req.body;
  const result = await contactAdmin(nom,email, message);
  return res.json(result);
});

// Route d'inscription
app.post('/api/register', async (req, res) => {
  const { email, password } = req.body;
  const result = await registerUser(email, password);
  return res.json(result);
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}.`);
});
