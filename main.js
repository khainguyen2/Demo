import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import pinia from './reducer'
import './assets/main.css'
import Antd from 'ant-design-vue';
const app = createApp(App)

app.use(router)
app.use(pinia)
app.use(Antd)
app.mount('#app')
