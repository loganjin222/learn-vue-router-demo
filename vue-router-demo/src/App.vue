<template>
  <div id="app">
    <h1>网站标题</h1>

    <!-- 通过<router-link>、<router-view>使用路由 -->

    <!-- 当<router-link>对应的路由匹配成功后，会自动给当前元素设置一个为router-link-active的class，通过设置active-class的值可以把自动生成的router-link-active换成你设置的这个值 -->
    <!-- 此时无法统一修改，每个<router-link>都要有active-class="active" -->
    <!-- 开发时用的很少 -->
    <router-link to="/home" tag="button" replace active-class="active">首页</router-link>
    <router-link to="/about" tag="button" replace active-class="active">关于</router-link>

    <!-- 该标签会根据当前的路径，动态渲染出不同的路由组件，它决定路由组件在页面中的位置（路由切换时，切换的是<router-view>挂载的路由组件，其他内容不会改变） -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  /* .router-link-active {
    color: red;
  } */

  .active {
    color: red;
  }
</style>
