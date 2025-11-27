<script setup lang="ts">
import { ref,reactive } from 'vue'
import type { Post } from '@/interfaces/Post'
// const post = reactive({
//   title:'',
//   details: '',
// });
// Form state
const name = ref('')
const email = ref('')
const password = ref('')
const gender = ref('')
const accepted = ref(false)



const post = reactive<Post>({
  title:"",
  details:"",
  isActive:false,
})

// Form submit
function formSubmit() {
  console.log("Name:", name.value)
  console.log("Email:", email.value)
  console.log("Password:", password.value)
  console.log("Gender:", gender.value)
  console.log("Accepted Terms:", accepted.value)
  alert("Form submitted! Check console for values.")
}

function formSubmit2(){
  console.log("Title",post.title);
  console.log("details",post.details);
  console.log("details",post.isActive);
}
</script>

<template>
  <div class="min-vh-100 d-flex align-items-center justify-content-center bg-light p-4">
    <form 
      @submit.prevent="formSubmit" 
      class="bg-white rounded-3 shadow p-4 w-100" 
      style="max-width: 450px;"
    >
      <h2 class="text-center mb-4">Create Account</h2>

      <!-- Name -->
      <div class="mb-3">
        <label for="name" class="form-label">Full Name</label>
        <input 
          type="text"
          id="name"
          v-model="name"
          placeholder="Enter your name"
          class="form-control"
        >
      </div>

      <!-- Email -->
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input 
          type="email"
          id="email"
          v-model="email"
          placeholder="example@mail.com"
          class="form-control"
        >
      </div>

      <!-- Password -->
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input 
          type="password"
          id="password"
          v-model="password"
          placeholder="Enter password"
          class="form-control"
        >
      </div>

      <!-- Gender Radio -->
      <div class="mb-3">
        <label class="form-label d-block">Gender</label>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="gender" id="male" value="male" v-model="gender">
          <label class="form-check-label" for="male">Male</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="gender" id="female" value="female" v-model="gender">
          <label class="form-check-label" for="female">Female</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="gender" id="other" value="other" v-model="gender">
          <label class="form-check-label" for="other">Other</label>
        </div>
      </div>

      <!-- Checkbox -->
      <div class="form-check mb-3">
        <input class="form-check-input" type="checkbox" id="terms" v-model="accepted">
        <label class="form-check-label" for="terms">
          I agree to the Terms & Conditions
        </label>
      </div>

      <!-- Submit Button -->
      <button type="submit" class="btn btn-primary w-100">
        Create Account
      </button>
    </form>
    <form 
      @submit.prevent="formSubmit2" 
      class="bg-white rounded-3 shadow p-4 w-100" 
      style="max-width: 450px;"
    >
      <h2 class="text-center mb-4">vue Raactive</h2>

      <!-- Name -->
      <div class="mb-3">
        <label for="name" class="form-label">Full Name</label>
        <input 
          type="text"
          id="name"
          v-model="post.title"
          placeholder="Enter your name"
          class="form-control"
        >
      </div>

      <!-- Email -->
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input 
          type="text"
          id="email"
          v-model="post.details"
          placeholder="example@mail.com"
          class="form-control"
        >
      </div>

      <!-- Password -->
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input 
          type="password"
          id="password"
          v-model="password"
          placeholder="Enter password"
          class="form-control"
        >
      </div>

      <!-- Gender Radio -->
      <div class="mb-3">
        <label class="form-label d-block">Gender</label>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="gender" id="male" value="male" v-model="gender">
          <label class="form-check-label" for="male">Male</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="gender" id="female" value="female" v-model="gender">
          <label class="form-check-label" for="female">Female</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="gender" id="other" value="other" v-model="gender">
          <label class="form-check-label" for="other">Other</label>
        </div>
      </div>

      <!-- Checkbox -->
      <div class="form-check mb-3">
        <input class="form-check-input" type="checkbox" id="terms" v-model="post.isActive">
        <label class="form-check-label" for="terms">
          I agree to the Terms & Conditions
        </label>
      </div>

      <!-- Submit Button -->
      <button type="submit" class="btn btn-primary w-100">
        Create Account
      </button>
    </form>
  </div>
</template>
