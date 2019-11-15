<template>
  <div id="app">
    <Navbar/>
    <Header />
    <About />
    <Portfolio />
    <Experience />
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/navbar.vue'
import Portfolio from './components/portfolio.vue'
import Footer from './components/footer.vue'
import Header from './components/header.vue'
import About from './components/about.vue'
import Experience from './components/experience.vue'


export default {
  name: 'app',
  components: {
    Navbar,
    Header,
    Footer,
    About,
    Portfolio,  
    Experience
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
