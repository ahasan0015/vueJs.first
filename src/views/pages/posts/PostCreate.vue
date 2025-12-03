<script setup lang="ts">
import { defaultPostFake, type PostFake } from '@/interfaces/PostFake';
import axios from 'axios';
import { ref } from 'vue';

let post = ref<PostFake>(defaultPostFake);
function handleSubmit(){
    // console.log("titel:",post.value.title);
    // console.log("body:",post.value.body);
    axios.post('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        console.log(response.data)
    })
    .catch(error =>{
        console.log(error);
    })
}

</script>

<template>
<h1>Create new Post</h1>

<form @submit.prevent=handleSubmit>
<div class="mb-3">
<label for="">Title</label>
<input type="text" class="form-control" v-model="post.title">
</div>
<div class="mb-3">
<label for="">Body</label>
<!-- <textarea type="text" class="form-control"> -->
<textarea class="form-control" v-model="post.body"></textarea>
</div>
<button type="submit" class="btn btn-success">Submit</button>
</form>


</template>

<style>

</style>