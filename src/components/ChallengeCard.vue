<template>
  <router-link :to="`/missions/${id}`" class="text-decoration-none text-dark">
    <div class="card h-100">
      <div class="card-body d-flex flex-column">
        <h5 class="card-title eco-brand-text">{{ title }}</h5>
        <p class="card-text small text-muted flex-grow-1">{{ description }}</p>
        <div class="d-flex justify-content-between align-items-center mt-3">
          <span class="badge bg-warning text-dark">+{{ points }} XP</span>
          <span class="small text-danger fw-bold">
            <i class="bi bi-clock-history"></i> {{ countdown }}
          </span>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script setup>
defineProps({
  id: Number,
  title: String,
  description: String,
  points: Number,
  countdown: String,
});
</script>