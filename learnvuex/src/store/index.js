import { createStore } from 'vuex'
import {
  INCREMENT
} from './mutations-types'

export default createStore({
  state: {
    message: 1000,
    info: {
      name: '张三',
      age: 25,
    }
  },
  mutations: {
    // 修改vuex下属性时，各个组件将修改操作提交到此，再进行修改
    [INCREMENT](state) {
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
    },

    /*
    vuex响应式原理
    条件:
      1.提前在store中初始化好全部数据 ---定义好的属性都会加入到响应式系统中
      2.个state中对象添加新属性时，使用下面的方式
        方式一：使用  Vue.set(obj,'newProp',123)
        方式二: 用新的对象给旧对象重新赋值

    实现：
      初始化给每个属性一个 Dep 来观察是否发生变化

      Dep 发现变化后，通知数组中的Watcher去变化(每个Watcher代表页面一个需要变化的地方)

      info: {
        name: '张三', Dep -> [Watcher,Watcher,Watcher......]
        age: 25,  Dep -> [Watcher]
      }

    */
    // 修改名称
    upName(state) {
      state.info.name = '李四'
    },
    // 添加地址
    upAddress(state) {
      // 原本无法实现响应式-----但新版vue-cli已经能实现了......
      state.info['address'] = '中国'
      // 响应式--当修改数组时 ->  Vue.set(数组对象,数组下标,值)
      // 注:使用前要引入Vue
      // Vue.set(state.info, 'address', '中国')
    },
    // 删除地址
    delAges(state) {
      delete state.info.age
    }
  },
  actions: {
    // 有异步操作时，先在此进行操作，得到结果后在进行mutation
  },
  modules: {
  }
})
