
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"


import App from './App.vue'
import router from './router'
import NavBar from './components/NavBar.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('nav-bar', NavBar)

app.mount('#app')
