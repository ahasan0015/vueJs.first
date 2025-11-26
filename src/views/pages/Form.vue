<script setup>
import { ref } from 'vue'

// Form state
const name = ref('')
const email = ref('')
const password = ref('')
const gender = ref('')
const accepted = ref(false)

// Form submit
function formSubmit() {
    console.log("Name:", name.value)
    console.log("Email:", email.value)
    console.log("Password:", password.value)
    console.log("Gender:", gender.value)
    console.log("Accepted Terms:", accepted.value)
    alert("Form submitted! Check console for values.")
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 p-4">
    <form 
      @submit.prevent="formSubmit" 
      class="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md space-y-5"
    >
      <h2 class="text-2xl font-bold text-gray-800 mb-6 text-center">
        Create Account
      </h2>

      <!-- Name -->
      <div>
        <label class="block text-gray-700 font-medium mb-1">Full Name</label>
        <input 
          type="text"
          v-model="name"
          placeholder="Enter your name"
          class="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
      </div>

      <!-- Email -->
      <div>
        <label class="block text-gray-700 font-medium mb-1">Email</label>
        <input 
          type="email"
          v-model="email"
          placeholder="example@mail.com"
          class="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
      </div>

      <!-- Password -->
      <div>
        <label class="block text-gray-700 font-medium mb-1">Password</label>
        <input 
          type="password"
          v-model="password"
          placeholder="Enter password"
          class="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
      </div>

      <!-- Gender Radio -->
      <div>
        <label class="block text-gray-700 font-medium mb-2">Gender</label>
        <div class="flex items-center gap-6">
          <label class="flex items-center gap-2">
            <input type="radio" value="male" v-model="gender" class="w-4 h-4 text-blue-600">
            <span class="text-gray-700">Male</span>
          </label>
          <label class="flex items-center gap-2">
            <input type="radio" value="female" v-model="gender" class="w-4 h-4 text-blue-600">
            <span class="text-gray-700">Female</span>
          </label>
          <label class="flex items-center gap-2">
            <input type="radio" value="other" v-model="gender" class="w-4 h-4 text-blue-600">
            <span class="text-gray-700">Other</span>
          </label>
        </div>
      </div>

      <!-- Checkbox -->
      <div class="flex items-center gap-2">
        <input type="checkbox" v-model="accepted" class="w-5 h-5 border-gray-300 rounded-sm text-blue-600 focus:ring-blue-500">
        <label class="text-gray-700">I agree to the Terms & Conditions</label>
      </div>

      <!-- Submit Button -->
      <button 
        type="submit" 
        class="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-3 rounded-lg shadow-lg hover:opacity-90 transition font-semibold"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<style scoped>
/* Optional: Add small shadow effect on hover for inputs */
input:focus {
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5);
}
</style>
