import Vue from 'vue'
import VueX from 'vuex'
Vue.use(VueX)
import todo from './modules/todo'
import music from './modules/music'

export default new VueX.Store({
    state: {
        msg: 'hello vueX',
    },
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        todo,
        music
    }
})