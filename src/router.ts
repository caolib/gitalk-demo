import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import GitalkView from './components/GitalkView.vue'
import GiscusView from './components/GiscusView.vue'

const routes = [
    { path: '/', component: HelloWorld },
    { path: '/gitalk', component: GitalkView },
    { path: '/giscus', component: GiscusView }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router