import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from "primevue/config";

import "primevue/resources/themes/soho-light/theme.css"

import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'


import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(PrimeVue);
app.use(router)

app.mount('#app')
