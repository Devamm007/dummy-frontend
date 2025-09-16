<template>
  <div class="container py-4">
    <div class="text-center mb-4">
        <h1 class="display-5 fw-bold">Your Eco Impact</h1>
        <p class="lead">See the real-world difference you're making!</p>
    </div>
    
    <div class="card p-4 mb-4">
        <h4 class="text-center mb-4">Personalized Impact Summary</h4>
        <div class="row text-center g-3">
            <div class="col-md-3 col-6">
                <div class="impact-card">
                    <span class="fs-1">♻️</span>
                    <h5>{{ user.stats.wasteRecycled }} kg</h5>
                    <p>Waste Recycled</p>
                </div>
            </div>
            <div class="col-md-3 col-6">
                <div class="impact-card">
                    <span class="fs-1">💧</span>
                    <h5>{{ user.stats.waterSaved }} L</h5>
                    <p>Water Saved</p>
                </div>
            </div>
            <div class="col-md-3 col-6">
                <div class="impact-card">
                    <span class="fs-1">🌳</span>
                    <h5>{{ user.stats.treesPlanted }}</h5>
                    <p>Trees Planted</p>
                </div>
            </div>
            <div class="col-md-3 col-6">
                <div class="impact-card">
                    <span class="fs-1">💨</span>
                    <h5>{{ user.stats.carbonFootprintReduction }} kg</h5>
                    <p>CO₂ Reduction</p>
                </div>
            </div>
        </div>
    </div>
    
    <div class="card p-4 mb-4">
        <h4 class="text-center">Progress Over Time</h4>
        <div class="bg-light rounded p-5 mt-2 text-center text-muted">Chart showing XP / CO₂ Saved over the last 30 days</div>
    </div>
    
    <div class="text-center">
        <button class="btn btn-primary btn-lg">
            <i class="bi bi-share-fill"></i> Share My Impact
        </button>
    </div>
    <BottomNav />
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useUserStore } from '@/stores/user';
import BottomNav from '@/components/BottomNav.vue';

const userStore = useUserStore();
const { user } = storeToRefs(userStore);
</script>

<style scoped>
.impact-card {
    background-color: #e9f5ee;
    border-radius: 1rem;
    padding: 1.5rem 1rem;
    height: 100%;
}
</style>