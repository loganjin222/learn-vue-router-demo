import Vue from 'vue'


// 1. 导入路由对象；并且调用Vue.use()，通过Vue.use(插件)来安装插件
import Router from 'vue-router'

import Home from '../components/home'
import About from '../components/about'

Vue.use(Router)


const routes = [
    // 此前没有实现默认显示首页组件，还需要用户点击。通过以下设置可以实现默认显示首页组件
    {
        // 根路径
        path: '/',
        // path: '', 这样写也可以
        // 重定向，将根路径重定向到/home的路径下
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/about',
        component: About
    },
]

// 2. 创建路由实例
const router = new Router({
    // 配置路由和组件之间的映射关系
    // routes: [

    // ]
    routes
}) 


// 3. 在Vue实例中挂载创建的路由实例
export default router