import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import HelloWorld from "./components/HelloWorld.vue"
import Tree from './components/Tree.vue'


import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const routes = [
    { path: '/', component: HelloWorld },
    { path: '/tree', component: Tree },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

const app = createApp(App);

app.use(router);
app.mount('#app');