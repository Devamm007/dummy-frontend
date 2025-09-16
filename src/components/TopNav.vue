<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white border-bottom">
    <div class="container-fluid">
      <router-link class="navbar-brand eco-brand-text" to="/">
        <img src="@/assets/logo.svg" alt="EcoChamps Logo" width="30" height="24" class="d-inline-block align-text-top">
        EcoChamps
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item" v-for="link in navLinks" :key="link.name">
            <router-link :to="link.path" class="nav-link" active-class="active">{{ link.name }}</router-link>
          </li>
        </ul>
        <div class="d-flex align-items-center">
            <span class="navbar-text me-3">Welcome, {{ userName }}!</span>
            <button class="btn btn-outline-secondary btn-sm">Logout</button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
defineProps({
    userName: String,
    navLinks: Array // e.g., [{ name: 'Dashboard', path: '/dashboard/teacher' }]
})
</script>