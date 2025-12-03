<script setup lang="ts">
import axios from 'axios';
import { useRoute } from 'vue-router';
import { reactive, ref } from 'vue';
import { defaultPostFake, type PostFake } from '@/interfaces/PostFake';
// import { defaultPostFake as defaultPost, type PostFake } from '@/interfaces/PostFake';

let route =useRoute();
// let post = reactive<PostFake>(defaultPost);
let post = ref<PostFake>(defaultPostFake);

axios.get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
.then(response => {
    console.log(response.data);
    //Object.assign(post,response.data);
    post.value = response.data;
})
.catch((error) => {
    console.log(error);
})
</script>

<template>
    <h3>Post Details</h3>
    <p>Post Id: {{ route.params.id }}</p>
    <p>Post User ID: {{ route.params.userId }}</p>
    <p>Post body:{{ route.params.body }} </p>
    <p>Post title:{{ route.params.body }} </p>

</template>

<style>


</style>