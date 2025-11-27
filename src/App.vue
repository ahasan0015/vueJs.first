<script  setup>
import Navbar from './views/layouts/Navbar.vue';
import Footer from './views/layouts/Footer.vue';
import Pricing from './views/pages/Pricing.vue';
import ComparePlans from './views/pages/ComparePlans.vue';
</script>

<template>
   <div class="container py-3">
   <Navbar/>
      
      <main>
       <!-- <Pricing></Pricing>
        <ComparePlans></ComparePlans> -->
        <router-view/>
      </main>
      <Footer/>
    </div>

</template>


