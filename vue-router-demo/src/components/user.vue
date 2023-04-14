<template>
    <div>
        <h2>我是用户</h2>
        <p>我是用户内容</p>
        
        <!-- userId如何获取 -->
        <h2>{{userId}}</h2>
        <h2>{{$route.params.id}}</h2>
    </div>
</template>

<script>
export default {
    name: 'user',
    computed: {
        userId() {
            return this.$route.params.id
        }
    }
}
</script>

<style scoped>
</style>