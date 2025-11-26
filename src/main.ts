// import './assets/main.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'tailwindcss/index.css'  

import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/index.ts'


createApp(App).use(router).mount('#app')
