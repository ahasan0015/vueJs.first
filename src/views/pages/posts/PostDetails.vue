<script>
import { useRoute } from 'vue-router';
let route =useRoute();

</script>

<template>
    <h3>Post Details</h3>
    <p>Post Id: {{ route.params.id }}</p>
    <p>Post Id: {{ route.params.userid }}</p>
    <p>PostId: </p>

</template>

<style>


</style>