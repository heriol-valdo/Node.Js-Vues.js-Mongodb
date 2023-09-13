// user.js
const bcrypt = require('bcrypt');
const User = require('../Model/user'); // Importez le modèle utilisateur

async function registerUser(email, password) {
  try {
    // Vérifie si l'utilisateur existe déjà
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return { success: false, message: 'Cet email est déjà enregistré.' };
    }

    // Hache le mot de passe avant de le stocker
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crée un nouvel utilisateur dans la base de données
    const newUser = new User({
      email,
      password: hashedPassword
    });

    await newUser.save();

    return { success: true, message: 'Utilisateur enregistré avec succès.' };
  } catch (error) {
    console.error('Erreur lors de l\'enregistrement :', error);
    return { success: false, message: 'Erreur lors de l\'enregistrement.' };
  }
}

module.exports = { registerUser };
