<template>
  <div>
      <h2>嵌套路由</h2>
      <p>新闻111</p>
  </div>
</template>

<script>
  export default {
      name: "HomeNew1",
      created() {
        // 当组件被创建出后调用(每次路由跳转到此组件时,会调用此方法)
        // console.log("新闻111创建")
      },
      activated() {
        // 当页面活跃时调用(路由跳转到此页面时)
        // console.log("新闻111活跃")
      },
      deactivated() {
        // 当页面不处于活跃时调用(路由由此页面跳转到其他页面时)
        // console.log('新闻111不活跃')
      },
      distoryed() {
        // console.log("新闻111销毁")
      },
  }
</script>

<style scoped>
</style>
