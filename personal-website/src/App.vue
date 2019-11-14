<template>
  <div id="app">
    <Navbar/>

    <Portfolio />
  </div>
</template>

<script>
import Navbar from './components/navbar.vue'
import Portfolio from './components/portfolio.vue'

export default {
  name: 'app',
  components: {
    Navbar,
    Portfolio
  }
}
</script>

<style>
  @import './assets/style/style.css';
  @import './assets/style/bootstrap-grid.css';
  @import url('https://fonts.googleapis.com/css?family=Damion|Montserrat');
  @import url('https://fonts.googleapis.com/css?family=Roboto');
  body {
    font-family: 'Montserrat', sans-serif;
    /* font-family: 'Roboto', sans-serif; */
  }
</style>
