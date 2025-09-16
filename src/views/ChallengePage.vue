<template>
  <div class="container py-4">
    <div class="card p-4">
      <h1 class="display-6 fw-bold">Mission: Plastic-Free Lunch 🥪</h1>
      <p class="text-muted">Show us how you avoided single-use plastic for your lunch today!</p>
      <hr>
      
      <h5 class="mt-3">Learning Resources</h5>
      <ul>
        <li><a href="#">Article: 5 Easy Ways to Pack a Waste-Free Lunch</a></li>
        <li><a href="#">Infographic: The Plastic Problem</a></li>
      </ul>

      <h5 class="mt-4">Submit Your Proof</h5>
      <form @submit.prevent="submitMission">
        <div class="mb-3">
          <label for="photoUpload" class="form-label">Upload a Photo</label>
          <input class="form-control" type="file" id="photoUpload">
        </div>
        <div class="mb-3">
          <label for="description" class="form-label">Brief Description</label>
          <textarea class="form-control" id="description" rows="3" placeholder="e.g., I used a reusable container and a cloth napkin!"></textarea>
        </div>
        <button type="submit" class="btn btn-primary w-100">
          Submit for +100 XP
        </button>
      </form>
    </div>
    
    <div v-if="showXpPopup" class="xp-popup">+100 XP 🎉</div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useUserStore } from '@/stores/user';

const userStore = useUserStore();
const showXpPopup = ref(false);

const submitMission = () => {
  // Add points to Pinia store
  userStore.addPoints(100);
  
  // Trigger animation
  showXpPopup.value = true;
  setTimeout(() => {
    showXpPopup.value = false;
    // Optionally, navigate away
    // router.push('/dashboard/student');
  }, 2000);
};
</script>