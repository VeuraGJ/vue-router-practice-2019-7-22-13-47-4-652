import Vue from 'vue'
import VueRouter from 'vue-router'
import main from '../components/main'
import home from '../components/home'
Vue.use(VueRouter)
export default new VueRouter({
    routes:[
    {
        path:'/',
        name:'main',
        component:main
    },
    {
        path:'/home',
        name:'home',
        component:home
    }
    ]
})