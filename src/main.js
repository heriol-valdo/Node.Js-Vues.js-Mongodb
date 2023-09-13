


import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import App from './App.vue'; // Assurez-vous d'importer correctement votre composant App
import routes from './route'; // Importez vos routes

library.add(faGithub, faLinkedin);


const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);

app.use(router);

app.mount('#app');
