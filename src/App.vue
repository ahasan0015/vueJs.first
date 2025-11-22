<script  setup>
import { ref } from 'vue';


      const title ="IsDB -65 "
      const desc = "Welcome to IsDB, WDPF-65 Batch"
      const round = ref(false);
      const trainees =['Roxy','Shah Alom', 'Farhana']
      const link ='https://www.youtube.com/shorts/pmtAXJXRp7o'
      const test =() => {
        alert("test Clicked");
      }    

      const count = ref(0);
      const increment = () => {
        count.value++;
      }

      
      const change = () =>{
        if(round.value){
          round.value =false;
        }else{
          round.value = true;
        }
      }
      
    
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <h1> {{title}}</h1>
      <a :href="link">Visit Website</a>
    </div>

    
    <h2>{{ count }} 
    <button type="button" @click="increment">increment</button>
    </h2>
  </header>

  <main>
    <p>{{desc}}</p>
    <p>Round
      <span v-if="round">Active</span>
      <span v-else="round">Inactive</span>
      <!-- <button type="button" @click="change">Change</button> -->
      <button type="button" @click="change">Change</button>
    </p>
    <ul>
      <li v-for="trainee in trainees" :key="trainee">{{trainee}}</li>
    </ul>
  </main>
</template>

<style scoped>

header{
  line-height:1.5;
}
.logo{
  display:block;
  margin:0 auto 2rem
}
main{
  margin:1.5rem auto;
  max-width: 800px;
  text-align:center;
}

</style>
