<template>
  <nav class="navbar">
    <div class="navbar-content">
      <div class="navbar-logo">
        <img src="../../assets/logo.png" alt="Logo">
      </div>
      <button @click="toggleMenu" class="navbar-toggle">
        <div :class="{ 'line': true, 'active': isMenuOpen }"></div>
        <div :class="{ 'line': true, 'active': isMenuOpen }"></div>
        <div :class="{ 'line': true, 'active': isMenuOpen }"></div>
      </button>
    </div>
    <ul class="navbar-links" :class="{ active: isMenuOpen }">
      <li @click="navigateTo('home')">Home</li>
      <li @click="navigateTo('services')">Services</li>
      <li @click="navigateTo('contact')">Contact</li>
      <li @click="navigateTo('logout')">logout</li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false
    };
  },
  methods: {  
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    navigateTo(routeName) {
      this.$router.push('/' + routeName); 
    }
  }
};
</script>

<style scoped>
@import './styleTemplates.css'
</style>
