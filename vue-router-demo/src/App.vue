<template>
  <div id="app">
    <h1>网站标题</h1>

    <!-- 通过<router-link>、<router-view>使用路由 -->

    <!-- 当<router-link>对应的路由匹配成功后，会自动给当前元素设置一个为router-link-active的class，通过设置active-class的值可以把自动生成的router-link-active换成你设置的这个值 -->
    <!-- 此时无法统一修改，每个<router-link>都要有active-class="active" -->
    <!-- 开发时用的很少 -->
    <!-- <router-link to="/home" tag="button" replace active-class="active">首页</router-link> -->
    <!-- <router-link to="/about" tag="button" replace active-class="active">关于</router-link> -->
    
    <!-- <button @click="homeClick">首页</button> -->
    <!-- <button @click="aboutClick">关于</button> -->

    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>

    <!-- 某些情况下, 一个页面的path路径可能是不确定的. 比如当我们进入页面时, 可能是/user/aaa, 也可能是/user/bbb, 除了有前面的/user外, 后面还加上了用户的id. 这种path和component之间的匹配关系叫做动态路由(父项user确定, 子项不确定) -->
    <!-- <router-link to="/user/zhangsan">用户</router-link> -->

    <!-- <router-link to="/user/+userId">用户</router-link>, 这样写不行, url后面直接是/user/+userId, 通过v-bind解决 -->
    <!-- 动态拼接, 通过v-bind -->
    <!-- 加''代表是字符串 -->
    <router-link :to="'/user/'+userId">用户</router-link>

    <!-- 在进行路由跳转的时候, 有些参数是希望传递给跳转过去的路由的, 有两种方式, 第一种方式是配置动态路由, 第二种方式是使用query -->
    params和query的选择: 如果有大量的数据需要传, 用query(REASON: query传入一个对象, params传入一个符号)
    <!-- <router-link to="/profile">简介</router-link> -->
    <!-- <router-link :to="{path: '/profile'}">简介</router-link> -->

    <!-- query第一种传递参数的方式: 通过<router-link>传递参数 -->
    <!-- 此时url显示为http://localhost:8080/profile?name=loganjin&age=30 -->
    <router-link 
    :to="{
      path: '/profile',
      query: {name: 'loganjin', age: '30'}
    }">简介</router-link>

    <!-- query第二种传递参数的方式: 通过代码的方式传递参数 -->
    <!-- <button @click="profileClick">简介</button> -->

    <!-- 该标签会根据当前的路径，动态渲染出不同的路由组件，它决定路由组件在页面中的位置（路由切换时，切换的是<router-view>挂载的路由组件，其他内容不会改变） -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  
  // 通过代码的方式修改路由
  // methods: {
  //   homeClick() {
  //     // this.$router.push('/home')
  //     this.$router.replace('/home')
  //     console.log('homeClick');
  //   },
  //   aboutClick() {
  //     // this.$router.push('/about')
  //     this.$router.replace('/about')
  //     console.log('aboutClick');
  //   }
  // }

  // methods {
  //   profileClick() {
  //     this.$router.push({
  //       path: '/profile',
  //       query: {
  //         name: 'loganjin',
  //         age: '30'
  //       }
  //     })
  //   }
  // }

  data() {
    return {
      userId: 'zhangsan'
    }
  },
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
