<script setup lang="ts">
import axios from "axios";
import {reactive,ref} from "vue";
import type { PostFake } from "@/interfaces/PostFake";



// let posts =ref<PostFake[]>([]);
let posts =reactive<PostFake[]>([]);


axios.get('https://jsonplaceholder.typicode.com/posts')
.then(Response =>{
  console.log(posts);
  // posts.value = Response.data;
  posts.push(...Response.data);
  console.log(posts);
})
.catch(error =>{
  console.log(error);
});

</script>
<template>
  <h3>Posts List</h3>
  <router-link to="/posts/create" class="btn btn-success">
  Add New Post
</router-link>

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
    <router-link to="" href="#" class="btn btn-primary btn-sm me-1">
      <i class="fa-solid fa-pen"></i>
    </router-link>

    <!-- Update -->
    <router-link :to="`posts/${post.id}/details/${post.userId}`"  class="btn btn-success btn-sm me-1" >
      <i class="fa-solid fa-arrow-up"></i>
    </router-link>

    <!-- Delete -->
    <router-link to="" href="#" class="btn btn-danger btn-sm me-1">
      <i class="fa-solid fa-trash"></i>
    </router-link>

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