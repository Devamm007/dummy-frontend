<template>
  <div class="container py-4">
    <div class="text-center mb-4">
      <h1 class="display-5 fw-bold eco-brand-text">Leaderboard</h1>
      <p class="lead">See how you stack up against other EcoChamps!</p>
    </div>

    <ul class="nav nav-pills nav-fill mb-4">
      <li class="nav-item"><a class="nav-link active" href="#">Class</a></li>
      <li class="nav-item"><a class="nav-link" href="#">School</a></li>
      <li class="nav-item"><a class="nav-link" href="#">City</a></li>
    </ul>

    <div class="card">
      <div class="table-responsive">
        <table class="table table-hover table-borderless mb-0">
          <thead>
            <tr>
              <th scope="col">Rank</th>
              <th scope="col">Name</th>
              <th scope="col">XP</th>
              <th scope="col">Badges</th>
            </tr>
          </thead>
          <tbody>
            <LeaderboardRow v-for="player in leaderboardData" :key="player.rank"
              :rank="player.rank"
              :name="player.name"
              :xp="player.xp"
              :badges="player.badges"
              :isCurrentUser="player.name === userStore.user.name"
            />
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <BottomNav />
</template>

<script setup>
import { useUserStore } from '@/stores/user';
import LeaderboardRow from '@/components/LeaderboardRow.vue';
import BottomNav from '@/components/BottomNav.vue';

const userStore = useUserStore();

// Dummy data
const leaderboardData = [
  { rank: '🥇', name: 'Sarah P.', xp: 1800, badges: ['Tree Planter', 'Community Champion'] },
  { rank: '🥈', name: userStore.user.name, xp: userStore.user.ecoPoints, badges: userStore.user.badges },
  { rank: '🥉', name: 'Mike L.', xp: 1100, badges: ['Water Saver'] },
  { rank: 4, name: 'Jessica B.', xp: 950, badges: ['Plastic-Free Hero'] },
];
</script>