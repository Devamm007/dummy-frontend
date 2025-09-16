<template>
  <span
    class="badge-icon"
    :title="name"
    data-bs-toggle="tooltip"
    data-bs-placement="top"
  >
    {{ icon }}
  </span>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
});

const icon = computed(() => {
  switch (props.name) {
    case 'Tree Planter': return '🌳';
    case 'Plastic-Free Hero': return '♻️';
    case 'Water Saver': return '💧';
    case 'Community Champion': return '🏆';
    default: return '🌟';
  }
});
</script>

<style scoped>
.badge-icon {
  font-size: 1.5rem;
  cursor: pointer;
  margin: 0 4px;
  display: inline-block;
  transition: transform 0.2s ease;
}
.badge-icon:hover {
  transform: scale(1.2);
}
</style>