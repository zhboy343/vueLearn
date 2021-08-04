<template>
  <div id="app">
    <h2>{{ $store.state.message }}</h2>
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
};
</script>

<style>
</style>
