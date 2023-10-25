import 'virtual:uno.css'
import '@unocss/reset/tailwind-compat.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import './styles/global.scss'
import './styles/element-variarbles.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
