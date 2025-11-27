<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();
const currentPlan = route.path;

// console.log(route);

</script>

<template>
<div>
<h3>Plan Details</h3>
<h4>Plan:{{currentPlan}}</h4>
<p>This is plan deatails</p>

</div>


</template>

<style>


</style>