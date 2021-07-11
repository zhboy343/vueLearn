<template>
  <div id="app">
    <TabBar></TabBar>
  </div>
</template>

<script>
import TabBar from "./components/tabbar/TabBar.vue";

export default {
  name: "App",
  components: {
    TabBar,
  },
};
</script>

<style>
@import "./assets/css/base.css";
</style>
