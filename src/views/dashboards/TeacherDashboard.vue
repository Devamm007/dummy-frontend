<template>
  <div>
    <TopNav :userName="teacherName" :navLinks="navLinks" />
    <div class="container py-4">
      <h2 class="mb-4">Welcome, {{ teacherName }}! (Oak Valley High)</h2>
      
      <div class="row g-4 mb-4">
        <div class="col-md-4"><div class="card p-3"><h5 class="card-title">Class Progress</h5></div></div>
        <div class="col-md-4"><div class="card p-3"><h5 class="card-title">Top Student: Sarah P.</h5></div></div>
        <div class="col-md-4"><div class="card p-3"><h5 class="card-title">Participation Trend</h5></div></div>
      </div>

      <div class="row g-4">
        <div class="col-lg-6">
          <div class="card p-4 h-100">
            <h4><i class="bi bi-pencil-square"></i> Content Studio</h4>
            <form>
              <div class="mb-3">
                <label class="form-label">Challenge Title</label>
                <input type="text" class="form-control" placeholder="e.g., Waste-Free Week">
              </div>
              <div class="mb-3">
                <label class="form-label">Description</label>
                <textarea class="form-control" rows="3"></textarea>
              </div>
              <div class="row">
                <div class="col"><input type="number" class="form-control" placeholder="Points"></div>
                <div class="col"><select class="form-select"><option>Photo Upload</option></select></div>
              </div>
              <button class="btn btn-primary mt-3">Create Challenge</button>
            </form>
          </div>
        </div>
        
        <div class="col-lg-6">
          <div class="card p-4 h-100">
            <h4><i class="bi bi-inbox-fill"></i> Submissions Queue (3)</h4>
            <ul class="list-group list-group-flush">
              <li class="list-group-item d-flex justify-content-between align-items-center">
                Alex G. - Plastic-Free Lunch
                <div>
                  <button class="btn btn-sm btn-success me-1">✓</button>
                  <button class="btn btn-sm btn-danger">×</button>
                </div>
              </li>
              </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import TopNav from '@/components/TopNav.vue';
const teacherName = "Ms. Davis";
const navLinks = [
    { name: 'Dashboard', path: '/dashboard/teacher'},
    { name: 'Content Studio', path: '#'},
    { name: 'Submissions', path: '#'},
    { name: 'Reports', path: '#'},
];
</script>