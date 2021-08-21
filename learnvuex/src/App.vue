<template>
  <div id="app">
    <h2>App------------------</h2>
    <h2>响应式原理-----------------</h2>
    <h2>{{ $store.state.info }}</h2>
    <button @click="upName">修改名称--名称是初始化定义好的</button>
    <button @click="upAddress">添加地址--地址初始化没有定义</button>
    <button @click="delAges">删除年龄--年龄是初始化定义好的</button>
    <h2>基础------------------</h2>
    <h2>{{ $store.state.message }}</h2>
    <button @click="add()">+</button>
    <button @click="sub()">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount2(10, 5)">+10 +5</button>
    <App2></App2>
  </div>
</template> 

<script>
import App2 from "./components/App2.vue";

export default {
  name: "App",
  components: {
    App2,
  },
  data() {
    return {};
  },
  methods: {
    add() {
      this.$store.commit("increment");
    },
    sub() {
      this.$store.commit("decrement");
    },
    // 提交方式1
    addCount1(count) {
      this.$store.commit("addCount", count);
    },
    // 提交方式2
    addCount2(count1, count2) {
      this.$store.commit({
        type: "addCount2",
        count1: count1,
        count2: count2,
      });
    },
    // 响应式原理
    // 修改名称
    upName() {
      this.$store.commit("upName");
    },
    // // 添加地址
    upAddress() {
      this.$store.commit("upAddress");
    },
    // 删除地址
    delAges() {
      this.$store.commit("delAges");
    },
  },
};
</script>

<style>
</style>
