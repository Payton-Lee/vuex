<template>
  <div>
    <Addition></Addition>
    <p>------------------</p>
    <Subtraction></Subtraction>
  </div>
</template>

<script>
import Addition from "./components/Addition.vue"
import Subtraction from "./components/Subtraction.vue"
export default {
  components: {
    Addition,
    Subtraction
  },
  data () {
    return {
      
    }
  }
}
</script>

<style>
</style>