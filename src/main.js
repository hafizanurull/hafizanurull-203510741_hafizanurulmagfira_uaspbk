import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Quasar } from 'quasar'
import pinia from './pinia'
import { createPinia } from 'pinia'

const app = createApp(App)
app.use(router)
app.use(createPinia)
app.use(Quasar)
app.mount('#app')
