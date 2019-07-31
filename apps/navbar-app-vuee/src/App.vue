<template>
  <div id="navbar-app-vue">
    <NavBar v-bind:customProps="this.customProps" />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'navbar-app-vue',
  components: {
    NavBar
  },
  data(){
    return {
      customProps: this.$parent
    }
  }
}
</script>

<style>
  #navbar-app-vue {}
</style>
