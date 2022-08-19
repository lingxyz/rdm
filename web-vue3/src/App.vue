<template lang="pug">
HomeLayout(v-if="['/home', '/'].includes(router.currentRoute.value.path)")
  router-view
DeaultLayout(v-else)
  router-view
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from "vue-router"
import DeaultLayout from './layouts/DeaultLayout.vue'
import HomeLayout from './layouts/HomeLayout.vue'

export default defineComponent({
  name: 'App',
  components: {
    DeaultLayout,
    HomeLayout
  },
  setup() {
    const router = useRouter()
    return {
      router
    }
  }
})
</script>

<style lang="stylus">
html, body
  margin 0
  padding 0
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  // text-align center
  // color #2c3e50
</style>
