import { createApp } from 'vue'
import './style.css'
import 'gitalk/dist/gitalk.css'
import App from './App.vue'
import router from "./router.ts";

import ElementPlus from 'element-plus'

createApp(App)
    .use(ElementPlus, { size: 'small', zIndex: 3000 })
    .use(router)
    .mount('#app')
