// auth.js
const bcrypt = require('bcrypt');
const user = require('../Model/user'); // Importez le modèle utilisateur

async function authentificationUser(email, password) {
  try {
    // Recherche de l'utilisateur dans la base de données
    const user = await User.findOne({ email });

    if (!user) {
      return { success: false, message: 'Utilisateur non trouvé.' };
    }

    // Vérification du mot de passe
    const result = await bcrypt.compare(password, user.password);

    if (result) {
      // Authentification réussie
      return { success: true, message: 'Authentification réussie.' };
    } else {
      // Mot de passe incorrect
      return { success: false, message: 'Mot de passe incorrect.' };
    }
  } catch (error) {
    console.error('Erreur lors de l\'authentification :', error);
    return { success: false, message: 'Erreur lors de l\'authentification.' };
  }
}

module.exports = { authentificationUser };
