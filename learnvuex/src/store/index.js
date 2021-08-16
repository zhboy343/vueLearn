import { createStore } from 'vuex'

export default createStore({
  state: {
    message: 1000
  },
  mutations: {
    // 修改vuex下属性时，各个组件将修改操作提交到此，再进行修改
    increment(state) {
      state.message++
    },
    decrement(state) {
      state.message++
    }
  },
  actions: {
  },
  modules: {
  }
})
