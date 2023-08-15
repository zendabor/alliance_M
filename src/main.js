import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import globalComponents from './components/global';

const app = createApp(App)

app.use(router)
app.use(globalComponents);
app.mount('#app')
