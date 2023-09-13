<template>
    <p>
      <headerGlobal />
    </p>
  <div class="contact-page">
    <div class="contact-form">
      <h2>Contactez-nous</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="nom">Nom :</label>
          <input type="text" id="nom" v-model="nom" required />
        </div>
        <div class="form-group">
          <label for="email">Email :</label>
          <input type="email" id="email" v-model="email" required />
        </div>
        <div class="form-group">
          <label for="message">Message :</label>
          <textarea id="message" v-model="message" required></textarea>
        </div>
        <button type="submit">Envoyer</button>
      </form>
      <p v-if="messageAlert" class="error-message">{{ messageAlert }}</p>
    </div>
    <div class="development-info">
      <h2>Le Développement</h2>
      <p>
        Le développement est un processus essentiel dans la création de logiciels, sites web et applications. Il implique la conception, la programmation, les tests et la maintenance des produits numériques. Chez notre entreprise, nous nous engageons à fournir des solutions de développement de haute qualité pour répondre à vos besoins.
      </p>
    </div>
  </div>
    <p>
      <footerGlobal message="ok"/>
    </p>
</template>

<script>

import footerGlobal from '../templates/footerGlobal.vue'
import headerGlobal from '../templates/headerGlobal.vue'

import axios from 'axios';

export default {
  data() {
    return {
      nom: '',
      email: '',
      message: '',
      messageAlert: ''
    };
  },
  methods: {
    submitForm() {
      const Contact = {
          nom: this.nom,
          email: this.email,
          message: this.message,
         };

      try {
      
        const response =  axios.post('/api/contact', Contact);

        if (response.data.success) {
          this.$router.push('/contact');
        } else {
          
          this.messageAlert= 'le message a ete envoyer.';
        }
      } catch (error) {
        
        this.messageAlert = 'Une erreur s\'est produite lors de l\'envoie. Veuillez réessayer.';
      }
    }
  },

   components: {
   footerGlobal,
   headerGlobal
  }
};
</script>

<style scoped>
@import './styleContact.css'

</style>
