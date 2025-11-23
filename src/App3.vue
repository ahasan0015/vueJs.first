<script  setup>
import { ref } from 'vue';
import src from '/public/1.gif';
import src2 from '@/assets/img/3.jpg';



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

        const decrement = () => {
        count.value--;
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
    <button type="button" @click="decrement">decrement</button>
    </h2>
  </header>

  <section class=" img-wrap">
  <img src="./assets/img/3.jpg" alt="img">
  <img src="./assets/img/4.jpg" alt="img">
  <img src="./assets/img/5.jpg" alt="img">
  <img src="@/assets/img/5.jpg" alt="img">
  <img src="../public/2.jpg" alt="img">
  <img :src alt="">
  <img :src="src2" alt="">
  
  </section>

  <main>
    <p>{{desc}}</p>
    <p text>Round
      <span v-if="round">Active</span>
      <span v-else="round">Inactive</span>
      <!-- <button type="button" @click="change">Change</button> -->
      <button  type="button" @click="change">Change</button>
    </p>
    <ul>
      <li v-for="trainee in trainees" :key="trainee">{{trainee}}</li>
    </ul>
  </main>
  <a href="" class="btn btn-primary btn-outline-warning">Hello vue</a>
</template>

<style>
@import './assets/custom.css';
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
.img-wrap{
  
 
 
  gap: 20px;
}
.img-wrap img{
  height: 100px;
  width: 100px;
  gap: 20px;
  border: 2px solid yellow;
}


</style>

