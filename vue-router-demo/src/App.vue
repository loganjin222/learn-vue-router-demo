<template>
  <div id="app">
    <h1>网站标题</h1>

    // 通过<router-link>、<router-view>使用路由
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>

    // 该标签会根据当前的路径，动态渲染出不同的路由组件，它决定路由组件在页面中的位置（路由切换时，切换的是<router-view>挂载的路由组件，其他内容不会改变）
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
