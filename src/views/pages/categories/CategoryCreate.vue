<script setup lang="ts">


import { defaultCategory, type Category } from '@/interfaces/Category';
import axios from 'axios';
import { ref } from 'vue';

let post = ref<Category>(defaultCategory);
function handleSubmit(){
    // console.log("Name:",post.value.name);
    // console.log("Actie Status:",post.value.is_active);

    let is_active = post.value.is_active ? 0 : 1
    console.log(is_active);
    let formData = new FormData();
    formData.append('name',post.value.name);
    formData.append('is_active',is_active.toString());
    // console.log(formData);
    formData.forEach((value,key)=> {
        console.log(key + '+' +value);
    });

    axios.post('http://127.0.0.1:8000/api/categories/', formData)
    .then((response) => {
        console.log(response);
    })
    .catch((error) =>{
        console.log(error);
    })
}

</script>

<template>
<h1>Create new Category</h1>

<form @submit.prevent=handleSubmit>
<div class="mb-3">
<label for="">Name</label>
<input type="text" class="form-control" v-model="post.name">
</div>
<div class="mb-3">

<!-- <textarea type="text" class="form-control"> -->
<input type="checkbox" class="from-check-input" v-model="post.is_active" id="checbox"> 
<label for="checbox" class="form-check-label">Active</label>
</div>
<button type="submit" class="btn btn-success">Save</button>
</form>


</template>

<style>

</style>