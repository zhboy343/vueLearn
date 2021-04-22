<template>
  <div id="app">
    <P>*********通过router-link标签实现***************</P>
    <!-- 设置路由跳转 在页面会渲染为<a> -->
    <router-link to="/home">Home</router-link>
    <br>
    <!-- router-link扩展
      tag 设置标签渲染样式(默认为a标签)
      replace 设置为replace模式(默认为push)  使用后不会保留记录(无法使用前进后退切换)
    
     -->
    <router-link to="/about" tag="button" replace>About</router-link>

    <P>*********通过监听事件实现***************</P>

    <button @click="homeClick">Home</button>
    <button @click="aboutClick">About</button>

    <P>*********动态路由***************</P>
    <button @click="userClick('zhangsan')">zhansgan</button>
    <br>
    <button @click="userClick('lisi')">lisi</button>
    <br>
    <router-link :to="'/user/'+wangwu">wangwu</router-link>

    <!-- <P>*********嵌套路由（在首页组件中写）***************</P> -->

    <P>*********路由参数传递***************</P>
    <!-- 通过router-link -->
    <router-link :to="{
      path: '/Profile',
      query: {
        id: '01',
        name: '用户1号',
        age: 18
      }
    }" >Profile</router-link>
    &#32;&#32;&#32;&#32;
    <!-- 通过botton -->
    <button @click="ProfileClick">lisi</button>


    <!-- 占位,路由跳转后内容显示位置 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      wangwu: 'wangwu'
    }
    
  },
  methods: {
    homeClick() {
      this.$router.push('/home')
    },
    aboutClick() {
      this.$router.push('/about')
    },
    userClick(aa) {
      this.$router.push('/user/' + aa)
    },
    ProfileClick() {
      this.$router.push({
      path: '/Profile',
      query: {
        id: '02',
        name: '用户2号',
        age: 20
      }
    })
    }
  }
}
</script>

<style>
.active {
  color: red;
}
</style>
