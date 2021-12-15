import { createApp } from 'vue'
import App from './App.vue'
import 'flex.css'
import './theme.pcss'
// import router from './router'
// import store from './store'
// import axios from 'axios'

import Vant from 'vant'
import 'vant/lib/index.css'

createApp(App).use(Vant).mount('#app')
// axios.defaults.baseURL = import.meta.env.PROD ? '/api' : '/api'
