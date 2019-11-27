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

<style lang="scss">
  @import './assets/style/reset.scss';
  @import './assets/style/style.scss';
  @import './assets/style/media.scss';

  html{
    scroll-behavior: smooth;
  }
</style>
