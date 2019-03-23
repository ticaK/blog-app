<template>
  <div id="app">
   <Navbar />
   <div class="container">
      <router-view/>
   </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'app',
  components: {
   Navbar
  }
}
</script>

<style>
#app {
  font-family:Verdana, Geneva, Tahoma, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 10px;
}
.container {
  background-color: #f4f4f5;
  min-height: 1000px;
}
</style>
