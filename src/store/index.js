import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  // 只有mutations中定义的函数，才能有权利修改state中的数据
  mutations: {
    add(state) {
      // 不要在mutations函数中执行异步操作
      // setTimeout(function(){
      //   // 变更状态
      //   state.count++
      // })
      state.count++
    },
    addN(state, step){
      state.count += step
    },
    sub(state) {
      state.count--
    },
    subN(state, step) {
      state.count -= step
    }
  },
  actions: {
    addAsync(context) {
      setTimeout(()=>{
        // 在actions中，不能直接修改 state中的数据
        // 必须通过context.commit() 触发某个 mutation 才行
        context.commit('add')
      }, 1000)
    },
    addNAsync(context, step){
      setTimeout(()=>{
        context.commit('addN', step)
      }, 1000)
    },
    subAsync(context) {
      setTimeout(()=>{
        context.commit('sub')
      }, 1000)
    },
    subNAsync(context, step){
      setTimeout(()=> {
        context.commit('subN', step)
      }, 1000)
    }

  },
  getters: {
    showNum(state) {
      return '当前最新的数量是['+  state.count + ']'
    }
  },
  modules: {
  }
})
