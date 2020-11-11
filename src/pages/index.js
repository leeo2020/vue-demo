const Home = () =>
    import ('./home/Home.vue')
const Find = () =>
    import ('./home/Find.vue')
const FindNow = () =>
    import ('./home/FindNow.vue')
const FindPast = () =>
    import ('./home/FindPast.vue')
const User = () =>
    import ('./user/User.vue')
const Music = () =>
    import ('./music/Music.vue')
const Detail = () =>
    import ('./music/MusicDetails.vue')
const Todo = () =>
    import ('./home/Todo')

const routers = [{
    id: 1,
    path: '/',
    component: Home,
    text: '企业首页'
}, {
    id: 2,
    path: '/find',
    component: Find,
    text: '公司动态',
    children: [{
        path: 't2',
        component: FindPast,
    }, {
        path: '*',
        component: FindNow,
    }]
}, {
    id: 3,
    path: '/user',
    component: User,
    text: '用户中心'
}, {
    id: 4,
    path: '/music',
    component: Music,
    text: '音乐列表'
}, {
    id: 5,
    path: '/detail/:id',
    component: Detail,
    isNotNav: true
}, {
    id: 6,
    path: '/store/todo',
    component: Todo,
    text: 'ToDoList'
}]
export default routers