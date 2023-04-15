<template>
    <div>
        <h2>我是简介</h2>
        <p>我是简介内容</p>

        <!-- 获取参数通过$route对象 -->
        <h2>{{$route.query}}</h2>
    </div>
</template>

<script>
export default {
    name: 'profile'
}
</script>

<style scoped>
</style>