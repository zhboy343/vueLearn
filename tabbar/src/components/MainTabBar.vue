<template>
  <TabBar>
    <TabBarItem path="/home" activeColor="#204288">
      <img slot="item-icon" src="../assets/img/tarbar/home.svg" />
      <img slot="item-icon-active" src="../assets/img/tarbar/home_active.svg" />
      <div slot="item-text">首页</div>
    </TabBarItem>
    <TabBarItem path="/category" activeColor="#204288">
      <img slot="item-icon" src="../assets/img/tarbar/category.svg" />
      <img
        slot="item-icon-active"
        src="../assets/img/tarbar/category_active.svg"
      />
      <div slot="item-text">分类</div>
    </TabBarItem>
    <TabBarItem path="/shopcart" activeColor="#ff5777">
      <img slot="item-icon" src="../assets/img/tarbar/shopcart.svg" />
      <img
        slot="item-icon-active"
        src="../assets/img/tarbar/shopcart_active.svg"
      />
      <div slot="item-text">购物车</div>
    </TabBarItem>
    <TabBarItem path="/profile">
      <img slot="item-icon" src="../assets/img/tarbar/profile.svg" />
      <img
        slot="item-icon-active"
        src="../assets/img/tarbar/profile_active.svg"
      />
      <div slot="item-text">我的</div>
    </TabBarItem>
  </TabBar>
</template>

<script>
import TabBar from "./tabbar/TabBar.vue";
import TabBarItem from "./tabbar/TabBarItem.vue";

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style>
</style>
