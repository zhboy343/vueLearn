import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// axios全局设置 --- 这些配置也可以直接加在单独的axios请求中
axios.defaults.baseURL = 'http://123.207.32.32:8000' // 设置请求根路径
/*
常见配置信息
  设置超时时间  单位:s
  axios.defaults.timeout
  请求前的数据处理
  axios.defaults.transformRequest = [function(data){}]
  请求后的数据处理
  axios.defaults.transformResponse = [function(data){}]
  自定义请求头
  axios.defaults.headers
  ......（具体使用时再查询）

注:
  get请求----params{参数}
  post请求---data{参数}
*/

/*
  axios实例
  之前都是使用的全局axios --缺点：不能根据不同接口设置不同的全局配置
*/
// 创建axios实例
const axios1 = axios.create({
  // 设置当前实例的全局配置
  baseURL: 'http://123.207.32.32:8000',
  timeout: 5000
})
// 使用实例
axios1({
  url: '/home/multidata'
}).then(res => {
  // console.log(res)
})