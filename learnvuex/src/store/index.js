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
    },
    // 传入数据 乘以message再返回
    addCount(state, count) {
      state.message += count
    },
    // 传入数据 乘以message再返回
    addCount2(state, data) {
      console.log(data)
      state.message += data.count1 += data.count2
    }
  },
  actions: {
    // 有异步操作时，先在此进行操作，得到结果后在进行mutation
  },
  modules: {
  }
})
