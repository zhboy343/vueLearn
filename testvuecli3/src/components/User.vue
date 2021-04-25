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
    },
    created() {
      console.log("User创建")
    },
    distoryed() {
      console.log("User销毁")
    },
    beforeRouteEnter(to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建

      // console.log('进入组件')
      next()
    },
    beforeRouteUpdate(to, from, next) {
      // 在当前路由改变，但是该组件被复用时调用
      // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
      // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
      // 可以访问组件实例 `this`
      // 当传递不同参数，刷新该页面时调用
      
      // 注意：这是跳转前调用,this指向前一个(例如当前是张三,点击跳转李四，此时该方法输出‘zhangshan’)
      // console.log(this.$route.params.userId)
      next()
    },
    beforeRouteLeave(to, from, next) {
      // 导航离开该组件的对应路由时调用
      // 可以访问组件实例 `this`

      // console.log('离开组件')
      next()
    }

}
</script>


<style scoped>
</style>
