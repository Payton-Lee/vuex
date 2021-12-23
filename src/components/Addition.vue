<template>
  <div>
    <!-- <h3>当前最新的count值为： {{ $store.state.count}}</h3> -->
    <h3>{{ $store.getters.showNum}}</h3>
    <button @click="btnhandler1">+1</button>
    <button @click="btnhandlern">+n</button>
    <button @click="btnhandlerAsync">+1 Async</button>
    <button @click="btnhandler4">+n Async</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  },
  methods: {
    btnhandler1() {
      this.$store.commit('add')
    },
    btnhandlern() {
      // commit 就是调用某个mutation函数
      this.$store.commit('addN', 3)
    },
    // 异步的让count加一
    // dispatch代表要触发某个actions
    btnhandlerAsync() {
      this.$store.dispatch('addAsync')
    },
    btnhandler4() {
      this.$store.dispatch('addNAsync', 5)
    }

  }
}
</script>

<style>

</style>