<template>
  <div id="app">
    <h2>app</h2>
    <button @click="getData">调用axios请求--无参</button>
    <button @click="getData2">调用axios请求--有参</button>
    <button @click="getData3">调用axios请求--多请求都完成后再处理结果</button>
    <button @click="getData4">调用axios请求--全局配置</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  components: {},
  methods: {
    // 调用axios请求--无参
    getData() {
      axios({
        url: "http://123.207.32.32:8000/home/multidata",
      })
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    // 调用axios请求--有参
    getData2() {
      axios({
        url: "http://123.207.32.32:8000/home/data",
        params: {
          type: "pop",
          page: 1,
        },
      })
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    // 调用axios请求--多请求都完成后再处理结果
    getData3() {
      axios
        .all([
          axios({
            url: "http://123.207.32.32:8000/home/multidata",
          }),
          axios({
            url: "http://123.207.32.32:8000/home/data",
            params: {
              type: "pop",
              page: 1,
            },
          }),
        ])
        .then(
          axios.spread((res1, res2) => {
            console.log(res1);
            console.log(res2);
          })
        )
        .catch((error) => {
          console.log(error);
        });
    },

    // 调用axios请求--全局配置
    getData4() {
      axios({
        url: "/home/multidata",
      })
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
</style>
