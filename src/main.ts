import { createApp } from 'vue'
import './style.css'
import 'gitalk/dist/gitalk.css'
import App from './App.vue'
import router from "./router.ts";

createApp(App)
    .use(router)
    .mount('#app')
