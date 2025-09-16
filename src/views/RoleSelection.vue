<template>
  <div class="container text-center py-5">
    <h1 class="display-4 fw-bold mb-4">Join the EcoVerse!</h1>
    <p class="lead mb-5">How will you make an impact? Choose your role to get started.</p>
    <div class="row g-4 justify-content-center">
      <div class="col-md-3" v-for="role in roles" :key="role.name">
        <router-link to="/signup" class="text-decoration-none">
          <div class="card card-body h-100 p-4">
            <i :class="role.icon" class="display-1 mb-3" :style="{ color: role.color }"></i>
            <h3 class="card-title">{{ role.name }}</h3>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
const roles = [
  { name: 'Student', icon: 'bi bi-book-fill', color: 'var(--eco-green-light)' },
  { name: 'Teacher', icon: 'bi bi-person-video3', color: 'var(--eco-blue)' },
  { name: 'Organization', icon: 'bi bi-building', color: 'var(--eco-earth-tone)' }
];
</script>