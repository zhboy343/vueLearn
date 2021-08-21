<template>
  <div id="app">
    <h2>App------------------</h2>
    <h2>module-----------------</h2>
    <h2>{{ $store.state.a.messageA }}</h2>
    <h2>state中属性名称可重复:{{ $store.state.a.message }}</h2>
    <button @click="upMessageA">修改名称mutationsA和message</button>
    <h2>{{ $store.state.b.messageB }}</h2>
    <button @click="upMessageByb">异步修改名称mutationsB</button>
    <h2>异步操作-----------------</h2>
    <h2>{{ $store.state.info }}</h2>
    <button @click="upInfoNameyb">异步操作修改名称mutations</button>
    <button @click="upInfoNameyb2">异步操作修改名称actions</button>
    <button @click="upInfoNameyb3">
      异步操作修改名称actions--修改完成后进行通知
    </button>
    <h2>响应式原理-----------------</h2>
    <h2>{{ $store.state.info }}</h2>
    <button @click="upName">修改名称--名称是初始化定义好的</button>
    <button @click="upAddress">添加地址--地址初始化没有定义</button>
    <button @click="delAges">删除年龄--年龄是初始化定义好的</button>
    <h2>基础------------------</h2>
    <h2>{{ $store.state.message }}</h2>
    <button @click="add()">+</button>
    <button @click="sub()">-</button>
    <button @click="addCount1(5)">+5</button>
    <button @click="addCount2(10, 5)">+10 +5</button>
    <App2></App2>
  </div>
</template> 

<script>
import App2 from "./components/App2.vue";
import { INCREMENT } from "./store/mutations-types";

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
      this.$store.commit(INCREMENT);
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

    // 异步操作
    // 修改名称
    upInfoNameyb() {
      this.$store.commit("upInfoNameyb");
    },
    upInfoNameyb2() {
      this.$store.dispatch("upInfoNameyb2");
    },
    upInfoNameyb3() {
      this.$store.dispatch("upInfoNameyb3", "xxxxx").then((data) => {
        // 处理返回结果
        console.log(data);
      });
    },

    // 模块模块处理
    // 修改messageA和message
    upMessageA() {
      // 注意不要在模块中和非模块中mutations起相同名称
      this.$store.commit("upMessageA");
    },
    // 异步修改messageB
    upMessageByb() {
      this.$store.dispatch("upMessageByb");
    },
  },
};
</script>

<style>
</style>
