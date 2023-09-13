<template>
   <p>
      <headerGlobal />
    </p>

  <div class="home-container">

   <h1>{{ message }}</h1>
    <p>
       Acceuil USER 
    </p>

    
  </div>

  <p>
      <footerGlobal message="ok"/>
    </p>
</template>

<script>
import footerGlobal from '../templates/footerGlobal.vue'
import headerGlobal from '../templates/headerGlobal.vue'

export default {
  data() {
    return {
      message: ''
    };
  },
  methods: {
    
  },

   components: {
   footerGlobal,
   headerGlobal
  }
};
</script>

<style scoped>
@import './StyleHome.css'
</style>


