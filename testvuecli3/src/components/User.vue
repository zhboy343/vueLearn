<template>
  <div>
      <h2>动态路由User</h2>
      <p>我是用户界面{{userId}}</p>
      <p>或者直接写{{$route.params.userId}}</p>
  </div>
</template>

<script>

export default {
    name: "User",
    computed: {
      userId() {
        // $route(注:不是router) --是当前活跃路由
        // userId是在路由配置中 /User/:userId 中的userId
        return this.$route.params.userId
      }
    }
}
</script>


<style scoped>
</style>
