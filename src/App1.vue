<script >
export default{
  data(){
    return{
      title:"IsDB -65 Welcome",
      desc: "Welcome to IsDB, WDPF-65",
      round: false,
      trainees:['Roxy','Shah Alom', 'Farhana'],
      link:'https://www.youtube.com/shorts/pmtAXJXRp7o'
    }
  },

  methods: {
    test(){
      alert('Method Working');
    }
  },
}

</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <h1> {{title}}</h1>
      <a :href="link">Visit Website</a>
    </div>
  </header>

  <main>
    <p>{{desc}}</p>
    <p>Round
      <span v-if="round">Active</span>
      <span v-else="round">Inactive</span>
    </p>
    <ul>
      <li v-for="trainee in trainees" :key="trainee">{{trainee}}</li>
    </ul>

    <button type="" @click="test">Click to test </button>
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
