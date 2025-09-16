// src/main.js
import { createApp } from 'vue'
import { createPinia } from 'pinia'

// Import Bootstrap and custom styles
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './assets/main.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

// Import Bootstrap JS at the end
import 'bootstrap/dist/js/bootstrap.bundle.min.js'