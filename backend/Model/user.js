const mongoose = require('mongoose');

// Modèle utilisateur
const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true 
  },
  password: {
    type: String,
    required: true
  }
});

const user = mongoose.model('User', UserSchema);

module.exports = user;
