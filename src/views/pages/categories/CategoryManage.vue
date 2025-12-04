<script setup lang="ts">
import type { Category } from '@/interfaces/Category';
import axios from 'axios';
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const router =useRoute();
// let categories = ref<any>([]);
let categories = ref<Category[]>([]);


axios.get('http://127.0.0.1:8000/api/categories')
.then(response =>{
  console.log(response.data);
  categories.value =response.data;
  if(categories.value.length === 0){
    router.push('/');
  }
  
})
.catch(error =>{
  console.log(error);
});

</script>
<template>
  <h3>Category Page</h3>
  <router-link to="/categories/create" class="btn btn-success mb-4">
    Add New Category
</router-link>

<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead class="table-dark">
      <tr>
        <th>ID</th>
        <th>Category Name</th>
        <th>Status</th>
        <th>Actions</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="item in categories" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.is_active }}</td>
        <td>
   <!-- Edit -->
    <router-link to="" href="#" class="btn btn-primary btn-sm me-1">
      <i class="fa-solid fa-pen"></i>
    </router-link>

    <!-- Update -->
    <router-link to=""  class="btn btn-success btn-sm me-1" >
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