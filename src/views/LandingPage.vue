<template>
  <div class="container col-xxl-8 px-4 py-5">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold lh-1 mb-3 eco-brand-text">
          <img src="@/assets/logo.svg" alt="EcoChamps Logo" width="60" class="me-2">
          EcoChamps
        </h1>
        <p class="h3 text-muted">Learn. Act. Impact.</p>
        <p class="lead mt-4">A gamified platform to empower the next generation of environmental heroes. Join quests, earn points, and make a real-world difference.</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start mt-5">
          <router-link to="/select-role" class="btn btn-primary btn-lg px-4 me-md-2">Sign Up</router-link>
          <button type="button" class="btn btn-outline-secondary btn-lg px-4">Login</button>
        </div>
      </div>
    </div>
  </div>
</template>