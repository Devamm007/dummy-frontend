<template>
  <nav class="navbar fixed-bottom navbar-light bg-light d-md-none border-top">
    <div class="container-fluid">
      <router-link to="/dashboard/student" class="nav-link text-center">
        <i class="bi bi-house-door-fill fs-4"></i>
        <div>Home</div>
      </router-link>
      <router-link to="/missions/1" class="nav-link text-center">
        <i class="bi bi-flag-fill fs-4"></i>
        <div>Missions</div>
      </router-link>
      <router-link to="/leaderboard" class="nav-link text-center">
        <i class="bi bi-trophy-fill fs-4"></i>
        <div>Leaderboard</div>
      </router-link>
      <router-link to="/profile" class="nav-link text-center">
        <i class="bi bi-person-circle fs-4"></i>
        <div>Profile</div>
      </router-link>
    </div>
  </nav>
</template>

<style scoped>
.nav-link {
    color: var(--eco-text);
}
.router-link-active {
    color: var(--eco-green-dark);
}
</style>