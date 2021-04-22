import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 阻止启动生产消息
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App) // 使用的模板--展示时用模板把组件中的app替换掉
}).$mount('#app') // 挂在的组件
