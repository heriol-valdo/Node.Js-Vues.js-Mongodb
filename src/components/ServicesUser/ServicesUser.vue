<template>
    <p>
      <headerGlobal />
    </p>
    <div class="heit"></div>
  <div class="card-page">
    <div class="card-container">
      <div class="card">
        <img src="image1.jpg" alt="Image 1" />
        <h3>Convertir PDF</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          pulvinar urna vel tortor vestibulum, ac fringilla arcu
          consectetur.
        </p>
      </div>
      <div class="card">
        <img src="image2.jpg" alt="Image 2" />
        <h3>Fusionner PDF</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          pulvinar urna vel tortor vestibulum, ac fringilla arcu
          consectetur.
        </p>
      </div>
      <div class="card">
        <img src="image3.jpg" alt="Image 3" />
        <h3>Modifier PDF</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          pulvinar urna vel tortor vestibulum, ac fringilla arcu
          consectetur.
        </p>
      </div>
    </div>
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
    };
  },
  

   components: {
   footerGlobal,
   headerGlobal
  }
};
</script>

<style scoped>
@import './styleServicesUser.css'
</style>
