<template>
  <div class="container py-4" style="max-width: 800px">
    <div class="card p-4">
      <div class="text-center mb-4">
        <div class="avatar-lg mb-2">{{ user.avatar }}</div>
        <h2>{{ user.name }}</h2>
        <p class="text-muted">{{ user.school }}</p>
      </div>

      <div class="row text-center g-3 mb-4">
        <div class="col-4"><div class="stat-box"><h3>{{ user.stats.xp }}</h3><p>Total XP</p></div></div>
        <div class="col-4"><div class="stat-box"><h3><span class="streak-flame">🔥</span> {{ user.streak }}</h3><p>Day Streak</p></div></div>
        <div class="col-4"><div class="stat-box"><h3>{{ user.stats.carbonFootprintReduction }}kg</h3><p>CO₂ Saved</p></div></div>
      </div>
      
      <div class="mb-4">
        <h4 class="text-center">My Badges</h4>
        <div class="text-center mt-3">
          <BadgeIcon v-for="badge in user.badges" :key="badge" :name="badge" />
        </div>
      </div>
      
      <div>
        <h4 class="text-center">Activity Log</h4>
        <ul class="list-group list-group-flush mt-3">
          <li class="list-group-item">Completed: Plastic-Free Lunch (+100 XP)</li>
          <li class="list-group-item">Completed: The Journey of Plastic (+20 XP)</li>
        </ul>
      </div>
    </div>
  </div>
  <BottomNav />
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useUserStore } from '@/stores/user';
import BadgeIcon from '@/components/BadgeIcon.vue';
import BottomNav from '@/components/BottomNav.vue';

const userStore = useUserStore();
const { user } = storeToRefs(userStore);
</script>

<style scoped>
.avatar-lg {
  font-size: 5rem;
  line-height: 1;
}
.stat-box {
  background-color: #f8f9fa;
  padding: 10px;
  border-radius: 0.5rem;
}
</style>