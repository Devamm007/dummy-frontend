<template>
  <tr :class="{ 'user-highlight': isCurrentUser }">
    <th scope="row">{{ rank }}</th>
    <td>{{ name }}</td>
    <td>{{ xp }}</td>
    <td>
      <BadgeIcon v-for="badge in badges" :key="badge" :name="badge" />
    </td>
  </tr>
</template>

<script setup>
import BadgeIcon from './BadgeIcon.vue';

defineProps({
  rank: [Number, String],
  name: String,
  xp: Number,
  badges: Array,
  isCurrentUser: Boolean,
});
</script>