import { createApp } from 'vue'
import '@/styles/globals.scss'
import App from '@/App.vue'
import router from './router'

createApp(App).use(router).mount('#app-root')
