<script setup lang="ts">
import axios from "axios";
import {reactive,ref} from "vue";
import type { PostFake } from "@/interfaces/PostFake";



let posts =ref<PostFake[]>([]);


axios.get('https://jsonplaceholder.typicode.com/posts')
.then(Response =>{
  console.log(posts);
  posts.value = Response.data;
})
.catch(error =>{
  console.log(error);
});

</script>
<template>
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead class="table-dark">
      <tr>
        <th>ID</th>
        <th>User ID</th>
        <th>Title</th>
        <th>Actions</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="post in posts" :key='post.id'>
        <td>{{post.id}}</td>
        <td>{{post.userId}}</td>
        <td>{{post.title}}</td>
        <td>
   <!-- Edit -->
    <a href="#" class="btn btn-primary btn-sm me-1" @click.prevent="editPost(post)">
      <i class="fa-solid fa-pen"></i>
    </a>

    <!-- Update -->
    <a href="#" class="btn btn-success btn-sm me-1" @click.prevent="updatePost(post)">
      <i class="fa-solid fa-arrow-up"></i>
    </a>

    <!-- Delete -->
    <a href="#" class="btn btn-danger btn-sm me-1" @click.prevent="deletePost(post)">
      <i class="fa-solid fa-trash"></i>
    </a>

</td>

      </tr>
      <tr>
        <td>2</td>
        <td>Jane Smith</td>
        <td>jane@example.com</td>
        <td>User</td>
      </tr>
    </tbody>
  </table>
</div>


</template>
<style scoped>

</style>