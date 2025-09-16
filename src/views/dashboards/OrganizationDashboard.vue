<template>
  <div>
    <TopNav :userName="orgName" :navLinks="navLinks" />
    <div class="container py-4">
      <h2 class="mb-4">Welcome, {{ orgName }}! (Corporate Partner)</h2>

      <div class="row g-4">
        <div class="col-lg-5">
          <div class="card p-4">
            <h4><i class="bi bi-megaphone-fill"></i> Create a Campaign</h4>
            <form>
              <div class="mb-2"><input type="text" class="form-control" placeholder="Campaign Title"></div>
              <div class="mb-2"><textarea class="form-control" placeholder="Description"></textarea></div>
              <div class="mb-2"><select class="form-select"><option>Target: All Schools</option></select></div>
              <div class="mb-2"><input type="text" class="form-control" placeholder="Rewards (e.g., Eco-Kit)"></div>
              <div class="mb-2"><label class="form-label small">Upload Content (PDF, Video)</label><input type="file" class="form-control"></div>
              <button class="btn btn-primary mt-2 w-100">Launch Campaign</button>
            </form>
          </div>
        </div>
        
        <div class="col-lg-7">
          <div class="card p-4">
            <h4><i class="bi bi-bar-chart-line-fill"></i> Analytics Dashboard</h4>
            <div class="row text-center mt-3">
              <div class="col"><h5>🌳 1,204</h5><p>Trees Planted</p></div>
              <div class="col"><h5>♻️ 890kg</h5><p>Waste Recycled</p></div>
              <div class="col"><h5>💧 5k L</h5><p>Water Saved</p></div>
            </div>
            <div class="bg-light rounded p-5 mt-2 text-center text-muted">Geo-Impact Heatmap Placeholder</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import TopNav from '@/components/TopNav.vue';
const orgName = "Green Initiatives Inc.";
const navLinks = [
    { name: 'Dashboard', path: '/dashboard/organization'},
    { name: 'Campaigns', path: '#'},
    { name: 'Analytics', path: '#'},
    { name: 'Rewards', path: '#'},
];
</script>