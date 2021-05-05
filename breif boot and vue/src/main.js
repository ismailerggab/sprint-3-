import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // here we import our routes

createApp(App).use(router).mount('#app') // and here we create the vue app and make the vue use our routes
