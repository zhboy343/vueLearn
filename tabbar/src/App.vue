<template>
  <div id="app">
    <!-- 占位-用于显示组件页面 -->
    <router-view></router-view>
    <TabBar>
      <TabBarItem path="/home">
        <img slot="item-icon" src="./assets/img/tarbar/home.svg" />
        <img
          slot="item-icon-active"
          src="./assets/img/tarbar/home_active.svg"
        />
        <div slot="item-text">首页</div>
      </TabBarItem>
      <TabBarItem path="/category">
        <img slot="item-icon" src="./assets/img/tarbar/category.svg" />
        <img
          slot="item-icon-active"
          src="./assets/img/tarbar/category_active.svg"
        />
        <div slot="item-text">分类</div>
      </TabBarItem>
      <TabBarItem path="/shopcart">
        <img slot="item-icon" src="./assets/img/tarbar/shopcart.svg" />
        <img
          slot="item-icon-active"
          src="./assets/img/tarbar/shopcart_active.svg"
        />
        <div slot="item-text">购物车</div>
      </TabBarItem>
      <TabBarItem path="/profile">
        <img slot="item-icon" src="./assets/img/tarbar/profile.svg" />
        <img
          slot="item-icon-active"
          src="./assets/img/tarbar/profile_active.svg"
        />
        <div slot="item-text">我的</div>
      </TabBarItem>
    </TabBar>
  </div>
</template>

<script>
import TabBar from "./components/tabbar/TabBar.vue";
import TabBarItem from "./components/tabbar/TabBarItem.vue";

export default {
  name: "App",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style>
@import "./assets/css/base.css";
</style>
