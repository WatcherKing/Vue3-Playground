import { createApp } from 'vue'
import App from '@/App.vue'

// STYLES
import '@/styles/globals.scss'

// ROUTER
import router from './router'

// EMITTER
import mitt from 'mitt'

const emitter = mitt();
createApp(App).config.globalProperties.emitter = emitter
createApp(App).use(router).mount('#app-root')
