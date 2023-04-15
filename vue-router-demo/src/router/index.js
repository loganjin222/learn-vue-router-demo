import Vue, { useAttrs } from 'vue'


// 1. 导入路由对象；并且调用Vue.use()，通过Vue.use(插件)来安装插件
import Router from 'vue-router'

// import Home from '../components/home'
// import About from '../components/about'

// import User from '../components/user'

Vue.use(Router)

// 我们知道路由中通常会定义很多不同的页面(路由组件)，这些页面最后被打包在哪里呢？一般情况下是放在一个JS文件中。
// 但是这么多页面放在一个JS文件中，必然会造成这个JS文件非常的大，如果我们一次性从服务器请求下来这个页面，可能需要花费一定的时间，甚至用户的电脑上还可能出现短暂空白的情况。如何避免这种情况呢？使用路由懒加载就可以了。
// 路由懒加载的主要作用就是将路由对应的路由组件打包成一个个的JS文件，只有在这个路由被访问到的时候，才加载对应的路由组件。
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
        // component: Home
        component: () => import('../components/home'),

        // 实现嵌套路由的步骤: 
        // 1. 创建对应的路由子组件, 并且配置路由和路由子组件之间的映射关系
        // 2. 通过<router-link>、<router-view>在父路由组件内部使用
        children: [
            {
                path: '',
                redirect: 'message'
            },
            {
                path: 'message',
                component: () => import('../components/message')
            },
            {
                path: 'news',
                component: () => import('../components/news')
            },
            
        ]
    },
    {
        path: '/about',
        // component: About
        component: () => import('../components/about')
    },
    {
        path: '/user/:id',
        // component: User
        component: () => import('../components/user')
    }
]

// 2. 创建路由实例
const router = new Router({
    // 配置路由和组件之间的映射关系
    // routes: [

    // ]
    routes,

    // 默认情况下，路径的改变使用的是URL的hash，这种方式有#，可以通过下面的设置使用HTML5的history模式
    mode: 'history'
}) 


// 3. 在Vue实例中挂载创建的路由实例
export default router