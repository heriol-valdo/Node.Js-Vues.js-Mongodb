<template>
  <div class="auth-container">
    <h2 class="title">Authentification</h2>
    <form @submit.prevent="login">
      <input v-model="email" type="email" placeholder="Email" required>
      <input v-model="password" type="password" placeholder="Mot de passe" required>
      <button type="submit" class="submit">Se connecter</button>
    </form>
    <p v-if="message" class="error-message">{{ message }}</p>
  </div>
</template>

<script>
import axios from 'axios';


export default {
  data() {
    return {
      email: '',
      password: '',
      message: ''
    };
  },
  methods: {
    login() {
        
      const User = {
          email: this.email,
          password: this.password
         };

      try {
      
        const response =  axios.post('/api/register', User);

        if (response.data.success) {
          this.$router.push('/home');
        } else {
          
          this.message = 'L\'authentification a échoué. Veuillez vérifier vos informations.';
        }
      } catch (error) {
        console.error('Erreur lors de l\'authentification :', error);
        this.message = 'Une erreur s\'est produite lors de l\'authentification. Veuillez réessayer.';
      }
    }
  }
};
</script>

<style scoped>
@import './styleUser.css'
</style>


