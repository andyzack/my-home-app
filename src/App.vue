<template>
  <div id="app">
    <MyHome msg="Welcome to MyHome App using Vue.js and Tailwind"/>
    <div class="px-8 py-12 text-left">
      <img class="mt-6 rounded-lg shadow-xl" alt="My Home" src="https://workhouseadvertising.com.au/test-data/images/1.jpg">
      <h1 class="mt-6 text-2xl font-bold text-blue-800 leading-tight">The Eastwood</h1>
      <p class="">Northbridge, W.A.</p>
      <p class="">From $209,900</p>
    </div>
    
  </div>
</template>

<script>
import MyHome from './components/MyHome.vue'

export default {
  name: 'App',
  components: {
    MyHome
  }
}
</script>

<style>
#app {

}
</style>
