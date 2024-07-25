import { createApp } from 'vue'
import App from './App.vue'
import '@/css/styles.css'
import router from '../src/router/router.js'
createApp(App).use(router).mount('#app')
