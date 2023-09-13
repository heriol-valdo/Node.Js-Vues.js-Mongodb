// auth.js
const bcrypt = require('bcrypt');
const contactadmin = require('../Model/contact'); // Importez le modèle utilisateur

async function contactAdmin(message,email, message) {
  try {
    // Crée un nouveau message dans la base de données
    const newContact = new contactadmin({
      nom,
      email,
      message
    });

    await newContact.save();

    return { success: true, message: 'message enregistré avec succès.' };
  } catch (error) {
    console.error('Erreur lors de l\'enregistrement :', error);
    return { success: false, message: 'Erreur lors de l\'enregistrement.' };
  }
}

module.exports = { contactAdmin };
