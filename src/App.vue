<script  setup>
import Navbar from './views/layouts/Navbar.vue';
import Footer from './views/layouts/Footer.vue';
import Pricing from './views/pages/Pricing.vue';
import ComparePlans from './views/layouts/ComparePlans.vue';
</script>

<template>
   <div class="container py-3">
   <Navbar></Navbar>
      
      <main>
       <Pricing></Pricing>
        <ComparePlans></ComparePlans>
      </main>
      <Footer></Footer>
    </div>

  
  
</template>


