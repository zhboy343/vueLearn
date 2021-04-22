<template>
  <div>
      <h2>我是Home</h2>
      <p>6666</p>

      <!-- 嵌套路由 -->
      <router-link to="/home/news1">新闻1</router-link>
      <br>
      <router-link to="/home/news2">新闻2</router-link>
      <router-view></router-view>
  </div>
</template>

<script>

export default {
    name: "Home",
    // 生命周期函数
    created() {
      // 当组件被创建出后调用
    },
    mounted() {
      // 当把模板(template)相关内容挂载到dom上后调用
    },
    updated() {
      // 界面发生刷新时调用({{aa}} -- 中的数据变化时也调用)
    }
}
</script>


<style scoped>
</style>
