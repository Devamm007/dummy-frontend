// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
// ... import all your other views

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'landing', component: () => import('../views/LandingPage.vue') },
    { path: '/select-role', name: 'select-role', component: () => import('../views/RoleSelection.vue') },
    { path: '/signup', name: 'signup', component: () => import('../views/SignupFlow.vue') },
    { path: '/dashboard/student', name: 'student-dashboard', component: () => import('../views/dashboards/StudentDashboard.vue') },
    { path: '/dashboard/teacher', name: 'teacher-dashboard', component: () => import('../views/dashboards/TeacherDashboard.vue') },
    { path: '/dashboard/organization', name: 'org-dashboard', component: () => import('../views/dashboards/OrganizationDashboard.vue') },
    { path: '/missions/:id', name: 'mission-details', component: () => import('../views/ChallengePage.vue'), props: true },
    { path: '/leaderboard', name: 'leaderboard', component: () => import('../views/LeaderboardPage.vue') },
    { path: '/profile', name: 'profile', component: () => import('../views/ProfilePage.vue') },
    { path: '/impact', name: 'impact', component: () => import('../views/FeedbackImpactPage.vue') },
    { path: '/offline', name: 'offline', component: () => import('../views/OfflineMode.vue') },
  ]
})

export default router