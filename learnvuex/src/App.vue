<template>
  <div id="app">
    <h2>App------------------</h2>
    <h2>{{ $store.state.message }}</h2>
    <button @click="add()">+</button>
    <button @click="sub()">-</button>
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
    add(){
      this.$store.commit('increment')
    },
    sub() {
      this.$store.commit('decrement')
    }
  }
};
</script>

<style>
</style>
