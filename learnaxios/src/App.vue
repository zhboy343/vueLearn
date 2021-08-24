<template>
  <div id="app">
    <h2>app</h2>
    <button @click="getData">调用axios请求--无参</button>
    <button @click="getData2">调用axios请求--有参</button>
    <button @click="getData3">调用axios请求--多请求都完成后再处理结果</button>
    <button @click="getData4">调用axios请求--全局配置</button>
    <button @click="getData5">调用axios请求--封装1</button>
    <button @click="getData6">调用axios请求--封装2</button>
    <button @click="getData7">调用axios请求--封装2_2</button>
    <button @click="getData8">调用axios请求--axios的拦截器</button>
    <div>封装{{ code }}返回结果显示：</div>
    <div>{{ data }}</div>
  </div>
</template>

<script>
import axios from "axios";
import { axios1, axios2, axios3 } from "./network/axiosRequest";

export default {
  name: "App",
  data() {
    return {
      data: "",
      code: "",
    };
  },
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

    // 调用axios请求--封装1
    getData5() {
      const config = {
        url: "/home/multidata",
      };
      axios1(
        config,
        (res) => {
          this.data = res;
          this.code = "1";
        },
        (err) => {
          console.log(err);
        }
      );
    },
    // 调用axios请求--封装2
    getData6() {
      const config = {
        url: "/home/multidata",
      };
      axios2(config)
        .then((res) => {
          this.data = res;
          this.code = "2";
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 调用axios请求--封装2_2
    getData7() {
      const config = {
        url: "/home/multidata",
      };
      axios2(config)
        .then((res) => {
          this.data = res;
          this.code = "2_2";
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 调用axios请求--axios的拦截器
    getData8() {
      const config = {
        url: "/home/multidata",
        method: "post",
        data: {
          type: "123",
        },
      };
      axios3(config)
        .then((res) => {
          this.data = res;
          this.code = "3";
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
</style>
