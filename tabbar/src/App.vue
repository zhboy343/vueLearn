<template>
  <div id="app">
    <div id="tar-bar">
      <div class="tab-bar-item">首页</div>
      <div class="tab-bar-item">分类</div>
      <div class="tab-bar-item">购物车</div>
      <div class="tab-bar-item">我的</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
@import "./assets/css/base.css";
#tar-bar {
  display: flex;

  background-color: #f6f6f6;

  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  /** x偏移量 y偏移量  虚化 范围 颜色*/
  box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.1);
}
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
}
</style>
