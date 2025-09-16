// src/stores/user.js
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useUserStore = defineStore('user', () => {
  const user = ref({
    name: 'Alex Green',
    email: 'alex.g@example.com',
    role: 'Student', // Can be 'Student', 'Teacher', 'Organization'
    ecoPoints: 1250,
    streak: 42,
    city: 'Greenfield',
    school: 'Oak Valley High',
    avatar: '🌱', // Eco-icon avatar
    stats: {
        xp: 1250,
        carbonFootprintReduction: 25.5, // in kg CO2
        wasteRecycled: 12, // in kg
        waterSaved: 50, // in L
        treesPlanted: 3
    },
    badges: ['Tree Planter', 'Plastic-Free Hero', 'Water Saver']
  })

  const isLoggedIn = computed(() => !!user.value)

  function login(userData) {
    user.value = { ...user.value, ...userData }
  }

  function logout() {
    user.value = null
  }
  
  function addPoints(points) {
    if(user.value) {
        user.value.ecoPoints += points;
        user.value.stats.xp += points;
    }
  }

  return { user, isLoggedIn, login, logout, addPoints }
})