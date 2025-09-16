<template>
  <div class="container py-4">
    <header class="d-flex justify-content-between align-items-center mb-4">
      <div>
        <h2 class="fw-bold">Welcome, {{ userStore.user.name }}!</h2>
        <span class="badge bg-warning text-dark me-2 p-2">
          <i class="bi bi-star-fill"></i> {{ userStore.user.ecoPoints }} XP
        </span>
        <span class="badge text-dark p-2" style="background-color: #fdcbad;">
          <span class="streak-flame">🔥</span> {{ userStore.user.streak }} Day Streak
        </span>
      </div>
      <div class="avatar fs-1">{{ userStore.user.avatar }}</div>
    </header>

    <div class="card p-3 mb-4">
      <h5 class="card-title">Your Carbon Footprint</h5>
      <p class="text-muted">Graph showing user vs. national average would go here.</p>
    </div>

    <div class="card p-3 mb-4">
      <h5 class="card-title">Today's Quest (1/3 Complete)</h5>
      <div class="progress mb-3" style="height: 10px;">
        <div class="progress-bar" role="progressbar" style="width: 33%;" aria-valuenow="33" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="task1" checked>
            <label class="form-check-label text-decoration-line-through" for="task1">
              Watch video: 'The Journey of Plastic'
            </label>
          </div>
          <span class="badge bg-success rounded-pill">+20 XP</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="task2">
            <label class="form-check-label" for="task2">
              Log your plastic-free lunch
            </label>
          </div>
          <span class="badge bg-success rounded-pill">+50 XP</span>
        </li>
      </ul>
    </div>
    
    <div class="row g-4">
        <div class="col-lg-8">
            <h5 class="mb-3">Ongoing Challenges</h5>
            <div class="row g-3">
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-body">
                            <h6 class="card-title">Community Cleanup</h6>
                            <p class="card-text small text-muted">Join the city-wide effort.</p>
                            <div class="text-danger small">Ends in: 2 days</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-4">
             <h5 class="mb-3">Leaderboard Snapshot</h5>
             <div class="card p-3">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">🥇 Sarah P. - 1800 XP</li>
                    <li class="list-group-item user-highlight">🥈 {{ userStore.user.name }} - {{ userStore.user.ecoPoints }} XP</li>
                    <li class="list-group-item">🥉 Mike L. - 1100 XP</li>
                </ul>
             </div>
        </div>
    </div>
  </div>
  <BottomNav />
</template>

<script setup>
import { useUserStore } from '@/stores/user';
import BottomNav from '@/components/BottomNav.vue';
const userStore = useUserStore();
</script>