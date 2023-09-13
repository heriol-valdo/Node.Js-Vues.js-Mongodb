const mongoose = require('mongoose');

// Modèle utilisateur
const ContactSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true,
    unique: true 
  },
  email: {
    type: String,
    required: true,
    unique: true 
  },
  message: {
    type: String,
    required: true
  }
});

const user = mongoose.model('Contact', ContaactSchema);

module.exports = user;
