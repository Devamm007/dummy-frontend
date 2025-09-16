<template>
  <div class="container" style="max-width: 600px;">
    <div class="text-center my-5">
      <h1 class="eco-brand-text">Create Your Account</h1>
    </div>

    <div v-if="step === 1" class="card p-4">
      <form @submit.prevent="nextStep">
        <div class="mb-3">
          <label for="name" class="form-label">Full Name</label>
          <input type="text" class="form-control" id="name" v-model="formData.name" required>
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email address</label>
          <input type="email" class="form-control" id="email" v-model="formData.email" required>
        </div>
         <div class="mb-3">
          <label for="school" class="form-label">School</label>
          <select class="form-select" id="school" v-model="formData.school">
            <option selected>Oak Valley High</option>
            <option>Greenwood Academy</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input type="password" class="form-control" id="password" v-model="formData.password" required>
        </div>
        <button type="submit" class="btn btn-primary w-100">Next</button>
      </form>
    </div>

    <div v-if="step === 2" class="card p-4 text-center">
        <h4 class="mb-4">What are you most passionate about?</h4>
        <div class="d-grid gap-2">
            <button class="btn btn-outline-secondary" @click="nextStep">♻️ Recycling & Waste Reduction</button>
            <button class="btn btn-outline-secondary" @click="nextStep">🌳 Planting Trees & Reforestation</button>
            <button class="btn btn-outline-secondary" @click="nextStep">💧 Water Conservation</button>
        </div>
    </div>

    <div v-if="step === 3" class="card p-5 text-center">
      <h1 class="display-3">🎉</h1>
      <h2 class="mt-3">Welcome to the EcoVerse, {{ formData.name }}!</h2>
      <p class="lead">Your first eco-mission awaits.</p>
      <router-link to="/dashboard/student" class="btn btn-primary mt-3">Let's Go!</router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';

const step = ref(1);
const formData = reactive({ name: '', email: '', school: 'Oak Valley High', password: '' });

const nextStep = () => {
  if (step.value < 3) {
    step.value++;
  }
};
</script>