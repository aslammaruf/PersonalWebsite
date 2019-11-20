import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faCode , faGlobeEurope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

library.add(
  faGithub,
  faLinkedinIn,
  faEnvelope,

  faCode,
  faGlobeEurope
)

new Vue({
  render: h => h(App),
}).$mount('#app')
