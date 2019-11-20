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
  @import './assets/style/_variables.scss';
  @import './assets/style/reset.scss';
  @import './assets/style/bootstrap-grid.css';
  @import url('https://fonts.googleapis.com/css?family=Damion|Montserrat');
  @import url('https://fonts.googleapis.com/css?family=Roboto');

  body {
    font-family: 'Montserrat', sans-serif;
    background-color: $Main-bg-Color;
    color: $Main-Text-Color;
  }

  section{
      padding: 50px 0;
  }

  hr {
    width: 10%;
    margin: 40px auto;
  }

  h2{
    text-align: center;
    font-size: 1.5em;
    color: $Secondary-Text-Color;
    margin: 20px;
  }
</style>
