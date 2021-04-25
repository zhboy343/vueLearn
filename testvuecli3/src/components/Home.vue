<template>
  <div>
      <h2>我是Home</h2>
      <p>6666</p>

      <!-- 嵌套路由 -->
      <router-link to="/home/news1">新闻1</router-link>
      <br>
      <router-link to="/home/news2">新闻2</router-link>
      <!-- 若此处不加keep-alive则之保留由当前(因为上一层App.vue有kpae,若新闻1/2来回切换，
      则切换前的销毁,切换后的创建。若上层切换(切换about或其他)则会显示当选中的前子组件(新闻1/2)不活跃)
      总之注意层级 -->
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
  </div>
</template>

<script>

export default {
    name: "Home",
    // 生命周期函数
    created() {
      // 当组件被创建出后调用(每次路由跳转到此组件时,会调用此方法)
    },
    mounted() {
      // 当把模板(template)相关内容挂载到dom上后调用 
    },
    updated() {
      // 界面发生刷新时调用({{aa}} -- 中的数据变化时也调用) 
    },
    distoryed() {
      // 路由跳转之后会销毁，此时会调用此方法
    },
    // 注:此方法只有在该组件未被销毁(使用keep-alive时)才生效
    activated() {
      // 当页面活跃时调用(路由跳转到此页面时)
      // console.log("活跃")
    },
    // 注:此方法只有在该组件未被销毁(使用keep-alive时)才生效
    deactivated() {
      // 当页面不处于活跃时调用(路由由此页面跳转到其他页面时)
      // console.log('不活跃')
    }
}
</script>


<style scoped>
</style>
