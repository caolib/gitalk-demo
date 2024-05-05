import { createRouter, createWebHistory } from 'vue-router'
import GitalkView from './components/GitalkView.vue'
import GiscusView from './components/GiscusView.vue'

const routes = [
    { path: '/', component: GiscusView },
    { path: '/gitalk', component: GitalkView },
    { path: '/giscus', component: GiscusView }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router