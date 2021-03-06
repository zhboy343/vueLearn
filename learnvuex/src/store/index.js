import { createStore } from 'vuex'
import {
  INCREMENT
} from './mutations-types'

// 模块化--创建模块
const modulesA = {
  state: {
    messageA: '这是模块A的state',
    message: 2000
  },
  mutations: {
    upMessageA(state) {
      state.messageA = '修改模块A的state'
      state.message = 1500
    }
  },
  actions: {},
}
const modulesB = {
  state: {
    messageB: '这是模块B的state'
  },
  mutations: {
    upMessageB(state) {
      state.messageB = '修改模块B的state'
    }
  },
  actions: {
    upMessageByb(context) {
      console.log(context)
      setTimeout(() => {
        // 这里的commit只能调用自身模块内的mutations
        context.commit('upMessageB')
      }, 1000);
    },
    // 小知识--对象解构
    dxjg({ state, commit, rootState }) {
      // 只取context中几个属性
      if (rootState.message == 1000) {
        console.log(state.messageB)
        commit('upMessageB')
      }
    }
  },
}

export default createStore({
  state: {
    message: 1000,
    info: {
      name: '张三',
      age: 25,
    }
  },
  mutations: {
    // 默认属性state
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
    },

    /*
    mutations中使用异步操作问题
    页面上成功修改，但devtools(辅助插件)中没有变化，需要再操作下页面才会变化(随便再点击下)
    总结：虽然能成功修改，但无法通过工具追踪---应写在actions中
    */
    upInfoNameyb(state) {
      setTimeout(() => {
        state.info.name = '李四'
      }, 1000);
    }
  },
  actions: {
    // 修改state唯一途径是通过mutations--->不在actions中直接修改
    // 默认属性context,传递参数和mutations相同
    // 有异步操作时，先在此进行操作，得到结果后在进行mutation
    upInfoNameyb2(context, patload) {
      setTimeout(() => {
        context.commit('upInfoNameyb')
      }, 1000);
    },

    // 回调,通知调用者已经完成修改--详情见Promise知识点
    upInfoNameyb3(context, patload) {
      return new Promise((resolve, reject) => {
        // 执行异步函数
        setTimeout(() => {
          context.commit('upInfoNameyb')
          // 执行完成后传递结果到then中处理，then写在调用的页面中
          resolve('修改name成功' + patload)
        }, 1000);
      })

    }
  },
  // vuex中的计算属性
  getters: {
    aaa(state) {
      return message + 100
    }
  },
  modules: {
    /*
    模块化
    除了页面展示state属性写法改变，调用其他和之前写法一样，
    调用时不需再中间加上 .模块名
    所以，除了state属性名称，mutations等属性里的名称不要重复
    */
    a: modulesA,
    b: modulesB,
  }
})
