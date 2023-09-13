import Auth from './components/Authentification/AuthentificationUser.vue';
import Home from './components/HomeUser/HomeUser.vue';
import Contact from './components/Contact/contactAdmin.vue';
import Services from './components/ServicesUser/ServicesUser.vue';
import NoFound from './components/PageNoFound/pageNoFound.vue';

const routes = [
   { path: '/', redirect: '/login' },
   { path: '/login', component: Auth },
   { path: '/home', component: Home },
   { path: '/contact', component: Contact},
   { path: '/services', component: Services},
   { path: '/logout', component: Auth },
   { path: '/:pathMatch(.*)*', component: NoFound }
];

export default routes;
