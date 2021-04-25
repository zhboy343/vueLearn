<template>
  <div>
      <h2>路由参数传递</h2>
      <p>我是Profile页面</p>
      <p>
        id:{{$route.query.id}}&#32;&#32;&#32;&#32;
        name:{{$route.query.name}}&#32;&#32;&#32;&#32;
        age:{{$route.query.age}}
      </p>
  </div>
</template>

<script>

export default {
    name: "Profile",
    created() {
      console.log("Profile创建")
    },
    distoryed() {
      console.log("Profile销毁")
    }
}
</script>


<style scoped>
</style>
