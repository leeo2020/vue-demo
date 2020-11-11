import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import routes from './pages/'

export default new VueRouter({
    mode: "hash",
    routes: [
        ...routes,
        { path: '/*', redirect: '/' }
    ]
})