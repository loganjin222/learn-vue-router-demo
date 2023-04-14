import Vue from 'vue'


// 1. 导入路由对象；并且调用Vue.use()，通过Vue.use(插件)来安装插件
import Router from 'vue-router'

import Home from '../components/home'
import About from '../components/about'

Vue.use(Router)


const routes = [
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